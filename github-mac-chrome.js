// Copyright (C) 2011 Alex Robinson (http://alextrob.net/)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy 
// of this software and associated documentation files (the "Software"), to deal 
// in the Software without restriction, including without limitation the rights 
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
// copies of the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in 
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
// SOFTWARE.

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
