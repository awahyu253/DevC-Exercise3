let planets = [{
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000",
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z"
        }, 
        {
            "name": "Yavin IV", 
            "rotation_period": "24", 
            "orbital_period": "4818", 
            "diameter": "10200", 
            "climate": "temperate, tropical", 
            "gravity": "1 standard", 
            "terrain": "jungle, rainforests", 
            "surface_water": "8", 
            "population": "1000",
            "created": "2014-12-10T11:37:19.144000Z", 
            "edited": "2014-12-20T20:58:18.421000Z"
        }, 
        {
            "name": "Hoth", 
            "rotation_period": "23", 
            "orbital_period": "549", 
            "diameter": "7200", 
            "climate": "frozen", 
            "gravity": "1.1 standard", 
            "terrain": "tundra, ice caves, mountain ranges", 
            "surface_water": "100", 
            "population": "unknown", 
            "created": "2014-12-10T11:39:13.934000Z", 
            "edited": "2014-12-20T20:58:18.423000Z" 
        }, 
        {
            "name": "Dagobah", 
            "rotation_period": "23", 
            "orbital_period": "341", 
            "diameter": "8900", 
            "climate": "murky", 
            "gravity": "N/A", 
            "terrain": "swamp, jungles", 
            "surface_water": "8", 
            "population": "unknown",
            "created": "2014-12-10T11:42:22.590000Z", 
            "edited": "2014-12-20T20:58:18.425000Z"
        }, 
        {
            "name": "Bespin", 
            "rotation_period": "12", 
            "orbital_period": "5110", 
            "diameter": "118000", 
            "climate": "temperate", 
            "gravity": "1.5 (surface), 1 standard (Cloud City)", 
            "terrain": "gas giant", 
            "surface_water": "0", 
            "population": "6000000", 
            "created": "2014-12-10T11:43:55.240000Z", 
            "edited": "2014-12-20T20:58:18.427000Z"
        }, 
        {
            "name": "Endor", 
            "rotation_period": "18", 
            "orbital_period": "402", 
            "diameter": "4900", 
            "climate": "temperate", 
            "gravity": "0.85 standard", 
            "terrain": "forests, mountains, lakes", 
            "surface_water": "8", 
            "population": "30000000", 
            "created": "2014-12-10T11:50:29.349000Z", 
            "edited": "2014-12-20T20:58:18.429000Z"
        }, 
        {
            "name": "Naboo", 
            "rotation_period": "26", 
            "orbital_period": "312", 
            "diameter": "12120", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grassy hills, swamps, forests, mountains", 
            "surface_water": "12", 
            "population": "4500000000",
            "created": "2014-12-10T11:52:31.066000Z", 
            "edited": "2014-12-20T20:58:18.430000Z"
        }, 
        {
            "name": "Coruscant", 
            "rotation_period": "24", 
            "orbital_period": "368", 
            "diameter": "12240", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "cityscape, mountains", 
            "surface_water": "unknown", 
            "population": "1000000000000",
            "created": "2014-12-10T11:54:13.921000Z", 
            "edited": "2014-12-20T20:58:18.432000Z"
        }, 
        {
            "name": "Kamino", 
            "rotation_period": "27", 
            "orbital_period": "463", 
            "diameter": "19720", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "ocean", 
            "surface_water": "100", 
            "population": "1000000000", 
            "created": "2014-12-10T12:45:06.577000Z", 
            "edited": "2014-12-20T20:58:18.434000Z"
        }, 
        {
            "name": "Geonosis", 
            "rotation_period": "30", 
            "orbital_period": "256", 
            "diameter": "11370", 
            "climate": "temperate, arid", 
            "gravity": "0.9 standard", 
            "terrain": "rock, desert, mountain, barren", 
            "surface_water": "5", 
            "population": "100000000000", 
            "created": "2014-12-10T12:47:22.350000Z", 
            "edited": "2014-12-20T20:58:18.437000Z"
        }
        ];
// deklarasi 
let table, newTable;
// buat tabel
buatFullTabel();
function buatFullTabel(){
     table = ' ';
     newTable = ' ';
    for(let i = 0; i < planets.length; i++){
        // buat seleksi utk kasih class bg-grey
        // seleksi menggunakan mod (ganjil-genap)
        if(i%2 != 0){
            table+="<tr class='bg-grey'>";
        }
        else{
            table+="<tr>";
        }        
        // Obj keys mengembalikan array berisi key2
        // Obj values mengembalikan array berisi value2
        for(let j = 0; j < Object.keys(planets[i]).length;j++){
            // buat kepala table(thead) dgn seleksi 
            if(i == 0 && j == 0){

            // tampilkan kepala table dengan looping via array obj.key
                for(let k = 0; k < Object.keys(planets[i]).length;k++){
                    table+="<td id='thead'>";
                    table+=Object.keys(planets[i])[k];
                    table+="</td>";                                                    
                }
                table+="</tr>";
           }
            //  tampilkan body table yg berisi sel2 yg berisi value dari key tiap2 objek 
            table+="<td>";
            // membuat sel utk tampilkan value dari setiap key 
            // print berupa planets[i].nama_atribut
            table+= Object.values(planets[i])[j];
            table+="</td>";
        }
       table+="</tr>";
    }
    document.getElementById('tabel').innerHTML += table; 
}
let nilai;
function cari(str){
    for(let i = 0; i < planets.length; i++){
        for(let j = 0; j < Object.keys(planets[i]).length;j++){            
            if(Object.values(planets[i])[j].toLowerCase() == str.toLowerCase()){
                table = ' ';
                newTable+="<tr>";
                for(let k = 0; k < Object.keys(planets[i]).length; k++){
                    newTable+="<td>";
                    newTable+= Object.values(planets[i])[k];
                    newTable+="</td>";
                }
                newTable+="</tr>";
            }
        }
    }
    // seleksi kondisi jika gk ketemu
    if (newTable == ' ') {
        document.getElementById('tabel').innerHTML = table;            
    }
    else{
        table = '';
        document.getElementById('tabel').innerHTML = newTable;    
    }
}

function startSearch(){
    nilai = document.getElementById("search").value;
    cari(nilai);
}