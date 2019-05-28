var karty="";
var tablica= new Array(6);
var kolejka=0;
var stost= new Array(48);
var stosb= new Array(48);
var lastt=0;
var lastb=0;
var stos= new Array(48);
var last=0;
var wartosci=new Array(48);
wartosci[0]=0;
var p=false;
var tabt=new Array(6);
var tabb=new Array(6);
for(i=0;i<6;i++)
	{
		tablica[i]=0; tabt[i]=0; tabb[i]=0;
	}
function wypisz ()
{	
	var pierwsza;
	for (i=0;i<23;i=i+2)
	{   
		var zawartosc=szukaj();
		var element="c"+i; tablica[zawartosc]++; tabt[zawartosc]++;
		karty=karty+'<div class="card" id="'+element+'" onclick="wybierz('+zawartosc+','+i+')">'+zawartosc+'</div>'
		wartosci[i]=zawartosc; if(zawartosc==0){pierwsza=i;p=true;}
	}
	$('#top').html(karty); 
	wybierz(wartosci[pierwsza],pierwsza);
	karty="";
	
	for (i=1;i<24;i=i+2)
	{
		var zawartosc=szukaj();
		var element="c"+i; tablica[zawartosc]++; tabb[zawartosc]++;
		karty=karty+'<div class="card" id="'+element+'" onclick="wybierz('+zawartosc+','+i+')">'+zawartosc+'</div>'
		wartosci[i]=zawartosc; if(p==false && zawartosc==0){pierwsza=i;kolejka=1;}
	}
	$('#bottom').html(karty);
	if(p==false){wybierz(wartosci[pierwsza],pierwsza);}
	document.getElementById("aktualna").onclick = function() {pobierz();};
	button.addEventListener('click', function(){cztery();});
	logo.addEventListener('click', function(){location.reload();});
	document.getElementById("zasady").onclick= function (){zasadki();};
	
}
window.onload = wypisz;

function randomNumber() 
{
    return Math.floor(Math.random() * 6);
}
function szukaj()
{	var nr=randomNumber();
	if(tablica[nr]>=4)
	{nr=szukaj();}
	return nr;
}
function wybierz (nr, i)
{ 
	if (kolejka%2==0 && i%2==0)
	{ 
		var txt;
		if(wartosci[stosb[lastb-1]]<=wartosci[i] || stosb[lastb-1]==undefined)
		{	
			$('#aktualna').html(nr); 
			$('#c'+i).remove();
			kolejka++; stost[lastt]=i; lastt++; stos[last]=i; last++
		}
		if($('#top').html() == ""){$('#container').html('<div id="wygrana">Wygrał gracz nr 1</div>')}
		tabt[nr]--;	
	}
	if (kolejka%2==1 && i%2==1)
	{ 
		if(wartosci[stost[lastt-1]]<=wartosci[i] || stost[lastt-1]==undefined)
		{
			$('#aktualna').html(nr); 
			$('#c'+i).remove();
			kolejka++; stosb[lastb]=i; lastb++; stos[last]=i; last++
		}
		if($('#bottom').html() == ""){$('#container').html('<div id="wygrana">Wygrał gracz nr 2</div>')}
		tabb[nr]--;
	} 
	document.getElementById("aktualna").onclick = function() {pobierz();};
}
function pobierz()
{
	if(kolejka%2==0) 
	{
		var a;
		if(stost[lastt-1]==stos[last-1]){a=stost[lastt-1];} else {a=stosb[lastb-1];}
		if(a==stost[lastt-1] && a!=undefined && last>0)
		{ 
				var c=wartosci[a];
				var tekst=$('#top').html(); tabt[c]++; 
				$('#top').html(tekst+'<div class="card" id="c'+a+'" onclick="wybierz('+c+','+a+')">'+c+'</div>');
				stost[lastt-1]=undefined; lastt--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		} else{
		if (a!=undefined && a==stosb[lastb-1] && last>0)
		{
				a=stosb[lastb-1]; var g=tos(); 
				var c=wartosci[a]; wartosci[a]=undefined;
				var tekst=$('#top').html(); wartosci[g]=c; tabt[c]++;
				$('#top').html(tekst+'<div class="card" id="c'+g+'" onclick="wybierz('+c+','+g+')">'+c+'</div>');
				stosb[lastb-1]=undefined; lastb--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 	
		}}
		
		if(stost[lastt-1]==stos[last-1]){a=stost[lastt-1];} else {a=stosb[lastb-1];}
		
		
		if(a==stost[lastt-1] && a!=undefined && last>0)
		{	
				var c=wartosci[a]; 
				var tekst=$('#top').html(); tabt[c]++; 
				$('#top').html(tekst+'<div class="card" id="c'+a+'" onclick="wybierz('+c+','+a+')">'+c+'</div>');
				stost[lastt-1]=undefined; lastt--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		} else{
		if (a!=undefined && a==stosb[lastb-1] && last>0)
		{
				a=stosb[lastb-1]; var g=tos();
				var c=wartosci[a]; wartosci[a]=undefined;
				var tekst=$('#top').html(); wartosci[g]=c; tabt[c]++;
				$('#top').html(tekst+'<div class="card" id="c'+g+'" onclick="wybierz('+c+','+g+')">'+c+'</div>');
				stosb[lastb-1]=undefined; lastb--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 	
		}}
		
		
		if(stost[lastt-1]==stos[last-1]){a=stost[lastt-1];} else {a=stosb[lastb-1];}
		
		
		if(a==stost[lastt-1] && a!=undefined && last>0)
		{	
			
				var c=wartosci[a];
				var tekst=$('#top').html(); tabt[c]++;
				$('#top').html(tekst+'<div class="card" id="c'+a+'" onclick="wybierz('+c+','+a+')">'+c+'</div>');
				stost[lastt-1]=undefined; lastt--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		} else{
		if (a!=undefined && a==stosb[lastb-1] && last>0)
		{
				a=stosb[lastb-1]; var g=tos();
				var c=wartosci[a]; wartosci[a]=undefined;
				var tekst=$('#top').html(); wartosci[g]=c; tabt[c]++;
				$('#top').html(tekst+'<div class="card" id="c'+g+'" onclick="wybierz('+c+','+g+')">'+c+'</div>');
				stosb[lastb-1]=undefined; lastb--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 	
		}}
	}	
		
	
	else
		{
		var a;
		if(stost[lastt-1]==stos[last-1]){a=stost[lastt-1];} else {a=stosb[lastb-1];}
		if(a==stosb[lastb-1] && a!=undefined && last>0)
		{
				var c=wartosci[a]; 
				var tekst=$('#bottom').html(); tabb[c]++;
				$('#bottom').html(tekst+'<div class="card" id="c'+a+'" onclick="wybierz('+c+','+a+')">'+c+'</div>');
				stosb[lastb-1]=undefined; lastb--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		}else{
		if(a==stost[lastt-1] && a!=undefined && last>0)
		{     
				var c=wartosci[a]; wartosci[a]=undefined; var g=bot();
				var tekst=$('#bottom').html(); wartosci[g]=c; tabb[c]++;
				$('#bottom').html(tekst+'<div class="card" id="c'+g+'" onclick="wybierz('+c+','+g+')">'+c+'</div>'); 
				stost[lastt-1]=undefined; lastt--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html("");  } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		}}
		
		if(stost[lastt-1]==stos[last-1]){a=stost[lastt-1];} else {a=stosb[lastb-1];}
	
		
		if(a==stosb[lastb-1] && a!=undefined && last>0) 
		{
				var c=wartosci[a]; 
				var tekst=$('#bottom').html(); tabb[c]++;
				$('#bottom').html(tekst+'<div class="card" id="c'+a+'" onclick="wybierz('+c+','+a+')">'+c+'</div>');
				stosb[lastb-1]=undefined; lastb--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		}else{
		if(a==stost[lastt-1] && a!=undefined && last>0)
		{   
				var c=wartosci[a]; wartosci[a]=undefined; var g=bot();
				var tekst=$('#bottom').html(); wartosci[g]=c; tabb[c]++;
				$('#bottom').html(tekst+'<div class="card" id="c'+g+'" onclick="wybierz('+c+','+g+')">'+c+'</div>');
				stost[lastt-1]=undefined; lastt--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html("");  } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		}}
		
		
		if(stost[lastt-1]==stos[last-1]){a=stost[lastt-1];} else {a=stosb[lastb-1];} 
		
		
		if(a==stosb[lastb-1] && a!=undefined && last>0)
		{
				var c=wartosci[a];
				var tekst=$('#bottom').html(); tabb[c]++;
				$('#bottom').html(tekst+'<div class="card" id="c'+a+'" onclick="wybierz('+c+','+a+')">'+c+'</div>');
				stosb[lastb-1]=undefined; lastb--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html(""); } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		} else{
		if(a==stost[lastt-1] && a!=undefined && last>0)
		{
				var c=wartosci[a]; wartosci[a]=undefined; var g=bot();
				var tekst=$('#bottom').html(); wartosci[g]=c; tabb[c]++;
				$('#bottom').html(tekst+'<div class="card" id="c'+g+'" onclick="wybierz('+c+','+g+')">'+c+'</div>'); 
				stost[lastt-1]=undefined; lastt--; stos[last-1]=undefined; last--; if(last==0){$('#aktualna').html("");  } else
				{$('#aktualna').html(wartosci[stos[last-1]]);} 
		}}
		
	}	
	kolejka++; 
	
	if(last==0){document.getElementById("aktualna").onclick = function() {};}
}
function cztery () 
{	
	var k=0;
	if(kolejka%2==0)
	{   
		var a; var b;
		if(stos[last-1]==undefined){b=0;} else {b=wartosci[stos[last-1]];} 
		for (i=b;i<6;i++)
		{
			if(tabt[i]==4) {a=i; k=1; break;} 
		}
		for (i=0;i<48;i=i+2)
		{
			if(wartosci[i]==a) {wybierz(a,i); kolejka++};
		}
		
	}
	if(kolejka%2==1)
	{   
		var a; var b;
		if(stos[last-1]==undefined){b=0;} else {b=wartosci[stos[last-1]];} 
		for (i=b;i<6;i++)
		{
			if(tabb[i]==4) {a=i; k=1; break;}
		}
		for (i=1;i<48;i=i+2)
		{
			if(wartosci[i]==a) {wybierz(a,i); kolejka++};
		}
	}
	if(k==1){kolejka++;}
}

function tos ()
{	
	var g;
	for (i=0;i<48;i=i+2)
	{
		if(wartosci[i]==undefined){g=i; break;}
	}
	return g;
}

function bot ()
{        
	var g;
	for (i=1;i<48;i=i+2)
	{
		if(wartosci[i]==undefined){g=i; break;}
	}
	return g;
}
function zasadki ()
{
	$('#zasady').html("Schowaj zasady");
	$('#tekscik').css('display','block');
	$('#zasady').prop( "onclick", null );
	$('#zasady').click(function () {chowaj();});
}
function chowaj ()
{
	$('#tekscik').css('display','none');
	$('#zasady').html("Pokaż zasady");
	$('#zasady').prop( "onclick", null );
	$('#zasady').click(function () {zasadki();});
}











