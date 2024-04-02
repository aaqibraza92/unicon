import { post, del, get, put } from "../api_helper";
import * as url from "../apiurls/index";
import GLocalStorage from "../Global/GLocalStorage";
const loginauth_key = "bakimrandevu";
const token_key1 = "buid";
const token_key2 = "brole";
const token_key3 = "btoken";

export const getLoggedInUserToken = () => {
    const user = localStorage.getItem("authUser")
    var userInfo = JSON.parse(user)
    if (userInfo) return userInfo.token
    return null
  }
// get Products
export const getHeaderMenuList = () => get(url.GET_HEADER_MENU_LIST)
// Login Method
export const userLogin = data => post(url.USER_LOGIN, data)
export const register = data => post(url.UPDATE_REGISTER, data)
export const changePassword = data => post(url.RESET_PASS, data)
export const getAddrList = data => post(url.GET_ADDR_LIST, data)
export const updateUserAddr = data => post(url.UPDATE_USER_ADDR, data)
export const deleteAddr = data => post(url.DELETE_ADDR, data)
export const productFilter= data => post(url.PRODUCT_FILTER,data)
export const productList= data => post(url.PRODUCT_LIST,data)
export const addToWishlist= data => post(url.ADD_TO_WISHLIST,data)
export const wishlist= data => post(url.WISHLIST,data)
export const productDetail= data => post(url.PRODUCT_DETAIL,data)
export const relatedProduct= data => post(url.RELATED_PRODUCT,data)
export const productDetailFilter= data => post(url.PROD_DETAIL_FILTER,data)
export const productAddToCart= data => post(url.ADD_TO_CART,data)
export const cartList= data => post(url.CART_LIST,data)
export const updateCart= data => post(url.UPDATE_CART,data)
export const removeCart= data => post(url.REMOVE_CART,data)
export const couponList=() => get(url.COUPON_LIST)
export const getBlogCategory=() => get(url.BLOG_CATEGORY)
export const blogList= data => post(url.BLOG_LIST,data)
export const applyCoupon= data => post(url.APPLY_COUPON,data)





//check auth
export const getAuthInfo = () => get(url.GET_AUTH_INFO)
export const getUserInfoAccount = data => post(url.GET_USER_INFO, data)
export const updateUserInfo = data => post(url.UPDATE_USER_INFO, data) 
// postForgetPwd
export const postForgetPwd = data => post(url.POST_PASSWORD_FORGET, data)
// postForgetPwd
export const postResetPassword = data => post(url.POST_RESET_PASSWORD, data)

export const userSignup = data => post(url.USER_SIGNUP, data)
export const checkEmailAvailable = data => post(url.CHECK_EMAIL_AVLBE, data)
export const checkMobAvailable = data => post(url.CHECK_MOB_AVLBE, data)
export const apiEmailVerified = () => get(url.EMAIL_VEREIFIED)
/*admin*/
export const adminRequestedLists = data => post(url.ADMIN_REQUESTED_LISTS,data)
export const salonUpdateStatus = data => post(url.UPDATE_NOTES_STATUS,data)
/*admin*/
/*salon*/
export const membershipList= data=> post(url.MEMBERSHIPS_LISTS,data)
export const membershipPurchase= data=> post(url.PURCHASE_MEMBERSHIP,data)
export const getAboutCompany = () => get(url.GET_ABOUT_COMPANY)
export const getWorkingHours = () => get(url.GET_WORKING_HOURS)
export const getWorkPortfolio = () => get(url.GET_WORK_PORTFOLIO)
export const getSalonResources = () => get(url.GET_SALON_RESOURCES)
export const getSalonAmenities = () => get(url.GET_SALON_AMENITIES)
export const getMembershipLists = () => get(url.GET_MEMBERSHIP_LISTS)
export const getActivatedMembership = () => get(url.ACTIVATED_MEMBERSHIP)
export const getSalonInvoice = () => get(url.GET_SALON_INVOICE)
export const getEmployeeList = () => get(url.GET_EMPLOYEE_LIST)
export const getSalonServicesLists = () => get(url.GET_SALON_SERVICE_LIST)
export const updateAboutCompany= data=> post(url.UPDATE_ABOUT_COMPANY,data)
export const addWorkPortfolio= (data,config)=> post(url.ADD_WORK_PORTFOLIO,data,config)
export const updateWorkingHours= data=> post(url.UPDATE_WORKING_HOURS,data)
export const salonServiceList= data=> post(url.SALON_SERVICES_LIST,data)
export const getServiceDropdown= data=> post(url.GET_SERVICE_DROPDOWN,data)
export const addSalonServices= data=> post(url.ADD_MULTIPLE_SALON_SERVICE,data)
export const addSalonResources= data=> post(url.ADD_SALON_RESOURCES,data)
export const getSalonServicesListById= data=> post(url.GET_SALON_SERVICE_LIST_BYID,data)
export const updateSalonAminity= data=> post(url.UPDATE_SALON_AMINITY,data)
export const getSalonLang = () => get(url.GET_SALON_LANG)
export const updateSalonlang= data=> post(url.UPDATE_SALON_LANG,data)
export const getMembershipPlansNames = data=> post(url.MEMBERSHIP_PLANS_NAMES,data)
export const getMembershipAddonList = data=> post(url.MEMBERSHIP_ADDON_LIST,data)
export const membershipAutoRenew = data=> post(url.MEMBERSHIP_AUTO_RENEW,data)
export const employeeRegistration = data=> post(url.EMPLOYEE_REGISTRATION,data)
export const updateTeamMemberDetail = data=> post(url.UPDATE_TEAM_DETAIL,data)
export const getTeamMemberService = data=> post(url.GET_TEAM_MEMBER_SERVICE,data)
export const getEmployeeInfo = data=> post(url.GET_EMPLOYEE_INFO,data)
export const addTeamMemberService = data=> post(url.ADD_TEAM_MEMBER_SERVICE,data)
export const getTeamMemberPortfolio = data=> post(url.GET_TEAM_MEMBER_PORTFOLIO,data)
export const check = data=> post(url.check,data)
export const resendOtp = data=> post(url.RESEND_OTP,data)


/*salon*/
