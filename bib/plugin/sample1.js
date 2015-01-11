/*
 * BiB/i Plugin 
 * Sample 1
 */

Bibi.plugin.sample1 = {
	name : "sample1",
	discription: "sample plugin 1"
};

Bibi.plugin.sample1.init = function(){
	O.log(2, "plugin " + this.name + " loaded");

	Bibi.plugin.addEvent("loadEPUB", function(){
		console.log("Plugin call:: sample1 loadEPUB");
	});

	Bibi.plugin.addEvent("beforeBack", function(){
		console.log("Plugin call:: sample1 beforeBack 1");
	});

	Bibi.plugin.addEvent("beforeForward", function(){
		console.log("Plugin call:: sample1 beforeForward 1");
	});

	Bibi.plugin.addEvent("beforeBack", function(){
		console.log("Plugin call:: sample1 beforeBack 2");
	});

	Bibi.plugin.addEvent("beforeForward", function(){
		console.log("Plugin call:: sample1 beforeForward 2");
	});

	Bibi.plugin.addEvent("openPanel", function(){
		console.log("Plugin call:: sample1 openPanel");
	});

}

// Init
Bibi.plugin.sample1.init();