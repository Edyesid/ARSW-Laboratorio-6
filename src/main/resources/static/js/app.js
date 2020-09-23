var app = (function() {

	var cinema_;

	var fecha_;
	
	var listFunctions_;
	
	var cliente = "js/apiclient.js";

	var setcinema = function(cinema) {
		cinema_ = cinema;
	}

	var setfecha = function(fecha) {
		fecha_ = fecha;
	}

	var getfuctionsByNameData = function(cinema, fecha) {
		console.log(cinema);
		console.log(fecha);
		$.getScript(cliente, function() {
			client.getFunctionsByCinemaAndDate(cinema,fecha,call);
		});
		fcinema(cinema);
	}

    function call(functions){
    	listFunctions_ = [];
        functions.map(function (fun) {
        	listFunctions_.push({
        		name: fun.movie.name,
        		genre: fun.movie.genre,
        		hour: fun.date.split(" ")[1]}); 
        });
        updateTable();
    }

    function updateTable() {
    	$("#idtable > tbody").empty();
    	for (i = 0; i < listFunctions_.length; i++) {
    		console.log(listFunctions_[i]);
    		$("#idtable > tbody").append(
    				'<tr><td>' + listFunctions_[i].name + '</td>' + 
    				'<td>' + listFunctions_[i].genre + '</td>' + 
    				'<td>' + listFunctions_[i].hour + '</td>' + 
    				'<td>' + "<button onclick = 'app.getSeat(\"" + listFunctions_[i].name +"\")'>Open Seats</button>" + '</td></tr>');
    		}
    }
    
    function fcinema(cinema) {
    	$("#cinemaSelected").text(cinema);
    }
    function favailability(name) {
    	$("#availability").text(name);
    }
    function seats(funcion) {
    	
    	var lugares = funcion.seats;
    	var sillas = lugares.length * lugares[0].length;
    	var c = document.getElementById("myCanvas");
    	var ctx = c.getContext("2d");
    	
    	ctx.fillStyle = "#FF0000";
    	
    	for (i = 0; i < lugares.length; i++) {
    		for (j = 0; j < lugares[i].length; j++) {
    			if (lugares[i][j]) {
    				ctx.fillRect((j * 40) + 25, (i * 30) + 30, 20, 20);
    			} else {
    				sillas = sillas - 1;
    				ctx.fillStyle = "#000000";
    				ctx.fillRect((j * 40) + 25, (i * 30) + 30, 20, 20);
    				ctx.fillStyle = "#FF0000";
    			}
    		}
    	}
    	$("#chairs").text(sillas);
    }
    
    function adminstrator(mvname) {
    	$("#saveupdate").empty();
    	$("#cfunction").empty();
    	$("#dfunction").empty();
		$("#editText").empty();
    	$("#editfunction").empty();
    	
    	var input = '<input type="\"text"\" id="\"editfunction"\" placeholder="\"New Hour"\" />'
    	var boton1 = '<button id="\"saveupdate"\">Save/Update</button>'
    	var boton2 = '<button id="\"cfunction"\">Create new function</button>'
		var boton3 = '<button id="\"dfunction"\">Delete Function</button>'
			
		$("#editText").append("Edit function:");
    	$("#editfunction").append(input);
		$("#saveupdate").append(boton1);
    	$("#cfunction").append(boton2);
    	$("#dfunction").append(boton3);
    }
    
	return {
		getFuctionsByNameData : function(cinema, fecha) {
			setcinema(cinema);
			setfecha(fecha);
			getfuctionsByNameData(cinema, fecha);
		},
		
		getSeat : function(mvname) {
			console.log(mvname);
			$.getScript(cliente, function() {
					client.getfuncion(cinema_,fecha_,mvname,seats);
				});
			favailability(mvname);
			adminstrator(mvname);
		}
	}
})();