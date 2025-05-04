using InventoryFrontEnd.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace InventoryFrontEnd.Controllers
{
    public class MaterialsController : Controller
    {
        // GET: Materials
        public ActionResult materialslist(string Campus_name)
        {
            Modelall mymodel = new Modelall();
            mymodel.AllMaterials = AllMaterials(Campus_name);
            ViewBag.campus_name = Campus_name;
            if (User.Identity.IsAuthenticated == false)
            {
                return RedirectToAction("", "login");
            }
            else
            {
                return View("~/Views/Materials/materialslist.cshtml", mymodel);
            }
        }


        public IEnumerable<Materials_list> AllMaterials(string Campus_name)
        {
            try
            {
                IEnumerable<Materials_list> ec = null;
                HttpClient hc = new HttpClient();
                hc.BaseAddress = new Uri(ConfigurationManager.AppSettings["API_Path"] + "API/Materials/Supply/");

                var consumedata = hc.GetAsync("List?Campus_name=" + Campus_name);
                consumedata.Wait();

                var dataread = consumedata.Result;
                if (dataread.IsSuccessStatusCode)
                {
                    var results = dataread.Content.ReadAsAsync<IList<Materials_list>>();
                    results.Wait();
                    ec = results.Result;
                }
                else if (dataread.StatusCode == HttpStatusCode.NotFound)
                {
                    ec = Enumerable.Empty<Materials_list>();
                    ViewBag.Message = "No Rooms Found for the selected campus.";
                }
                else
                {
                    ec = Enumerable.Empty<Materials_list>();
                    ViewBag.Message = "Unable to retrieve room data. Please contact support for assistance.";
                }
                return ec;
            }
            catch (Exception ex)
            {

                ViewBag.Message = "An error occurred: " + ex.Message;
                return Enumerable.Empty<Materials_list>();
            }
        }
    }
}