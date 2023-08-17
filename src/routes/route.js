const express = require("express");
const router = express.Router();
const { savePicture, deletePictures, galleryPage } = require("../controllers/pictureController");
const { homePage, aboutPage, termsPage, contactPage, faqPage, reviewPage, refundPage, servicesPage } = require("../controllers/homeController");
const { saveTheaterInfo, getSlotInfo } = require("../controllers/theaterController");
const { confirmBooking, calculate, successBooking } = require("../controllers/bookingController");
const { saveTestimonial } = require("../controllers/testimonialController");
const { registerAdmin, loginAdmin, loginPage, adminDashboard, logout } = require("../controllers/adminController");
const { upload } = require("../middlewares/uplaodMiddleware");
const { authenticateAdmin } = require("../middlewares/authMiddleware");
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);
router.get("/admin/dashboard", authenticateAdmin, adminDashboard);
router.get("/admin/logout", logout);
router.post("/pictures", upload.array("photos", 10), savePicture);
router.post("/deletePictures", deletePictures);
router.post("/theater/saveInfo", saveTheaterInfo);
router.post("/theater/getSlotInfo", getSlotInfo);
router.post("/booking/bookTheater", confirmBooking);
router.post("/testimonial/save", saveTestimonial);
router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/terms", termsPage);
router.post("/calculate", calculate);
router.get("/booking/success", successBooking);
router.get("/contact", contactPage);
router.get("/faq", faqPage);
router.get("/feedback", reviewPage);
router.get("/login", reviewPage);
router.get("/admin/login", loginPage);
router.get("/gallery", galleryPage);
router.get("/refund", refundPage);
router.get("/services", servicesPage);

module.exports = router;
