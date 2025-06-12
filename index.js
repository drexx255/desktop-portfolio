var skillstab = document.getElementsByClassName("skills-tab");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (skillstabs of skillstab) {
    skillstab.classlist.remove("skills-tab active");
  }
}
for (tabcontents of tabcontent) {
  tabcontent.classlist.remove("tab-content skills");
}