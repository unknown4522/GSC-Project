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
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index(string Campus_name)
        {
            Modelall mymodel = new Modelall();
            var inventoryController = new InventoryController();
            var result = inventoryController.Allrooms(Campus_name);
            var itemcount = inventoryController.Allitems(Campus_name);
            ViewBag.Campus_name = Campus_name;
            mymodel.Room_list = result;
            mymodel.Allitems = itemcount;
            ViewBag.firstName = Session["FirstName"];
            ViewBag.LastName = Session["LastName"];
            ViewBag.campusName = Session["campusName"];
            if (User.Identity.IsAuthenticated == false)
            {
                return RedirectToAction("", "login");
            }
            else
            {
                return View("~/Views/Dashboard/Index.cshtml", mymodel);
            }
        }

    
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("", "login");
        }


    }
}