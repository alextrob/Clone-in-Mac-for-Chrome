//
// Written by Alex Robinson (http://alextrob.net) on December 27, 2011.
// You are hereby allowed to do whatever you want with it.
//

function createCloneInMacButton() {
	// This is very boring stuff, but I didn't want to depend on jQuery for something so trivial.
	
	// Make sure we should really be putting a button on this page.
	if (document.getElementsByClassName("btn-clone-in-mac").length != 0) return;
	if (document.getElementsByClassName("native-clones").length != 1) return;
	if (navigator.appVersion.indexOf("Mac") ==- 1) return;

	var githubMacURL = "github-mac://openRepo/" + window.location.origin + window.location.pathname;
	var nativeClones = document.getElementsByClassName("native-clones")[0];
	var listItem = document.createElement("li");

	var link = document.createElement("a");
	link.href = githubMacURL;
	link.className = "minibutton btn-clone-in-mac";

	var span = document.createElement("span");
	span.className = "icon";

	var text = document.createTextNode(" Clone in Mac");

	// Put it all together and throw it on the page.
	span.appendChild(text);
	link.appendChild(span);
	listItem.appendChild(link);
	nativeClones.insertBefore(listItem, nativeClones.firstChild);
}

createCloneInMacButton();
