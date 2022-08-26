
document.addEventListener('DOMContentLoaded', function () {
    console.log("dkdkkdda")
    myModule.querySelect("#showmore").addEventListener("click", myModule.showMore);

}, false);
//
// const myModule = (() => {
//
//     const showMore = function () {
//         // let dateInp = querySelect("#date");
//         let div = querySelect("#plus");
//         div.className = "d-block";
//         console.log("skskkss")
//     }
// //----------------------------
//     /** for more readable syntax
//      * @param container - get an #id
//      * @returns {*} - returns selector with the particular id sent */
//     const querySelect = function (container) {
//         return document.querySelector(container);
//     }
//     //---------------------
//     /** set attribute to a DOM object
//      * @param container - get an #id
//      * @param qualName - get a qualified name (class, href, etc)
//      * @param val - get the value we want to insert */
//     const setAttr = function (container, qualName, val) {
//         querySelect(container).setAttribute(qualName, val);
//     }
//     //--------------------------------------
//     /** add listeners to the save buttons of the DOM inserted photos (every card has a such button) */
//     const addListeners = function () {
//         let buttons = document.getElementsByClassName("btn btn-info ml-2 mr-2");
//         // for (let btn of buttons)
//         //     btn.addEventListener('click', saveImageToList);
//     }
//     //--------------------------------
//     /** creates a DOM element
//      * @param node - a tag
//      * @returns {*} - returns a created element with the particular tag sent */
//     const createNode = function (node) {
//         return document.createElement(node);
//     }
//     //-----------------
//     /** set the child and append him to the parent sent
//      * @param parent - get the parent node
//      * @param child - get the child node
//      * @param nameClass - the class name we want to insert to the child
//      * @param inner - the innerHTML we want to insert to the child */
//     const appendNode = function (parent, child, nameClass, inner) {
//         child.className = nameClass;
//         child.innerHTML = inner;
//         parent.appendChild(child);
//     }
//     //---------------------
//     /** reset errors to none errors */
//     const resetErrors = function () {
//         document.querySelectorAll(".is-invalid").forEach((e) => e.classList.remove("is-invalid"));
//         document.querySelectorAll(".errormessage").forEach((e) => e.innerHTML = "");
//     }
//     //-----------------------------
//
//     return {
//         showMore: showMore,
//         querySelect: querySelect,
//     }
// })();
