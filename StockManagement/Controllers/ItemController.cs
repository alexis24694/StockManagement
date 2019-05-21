using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StockManagement.Controllers
{
    public class ItemController : Controller
    {
        // GET: Item
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult AddItem()
        {
            return PartialView("AddItem");
        }

        public ActionResult ShowItems()
        {
            return PartialView("ShowItems");
        }

        public ActionResult EditItem()
        {
            return PartialView("EditItem");
        }

        public ActionResult DeleteItem()
        {
            return PartialView("DeleteItem");
        }
    }
}