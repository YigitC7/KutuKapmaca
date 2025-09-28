// Yazan Yiğit Çıtak

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Math.random() * (max - min + 1) => [0, max-min+1)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomMultipleOf12(min, max) {
    // min ve max aralığında 12'nin katlarını bul
    let start = Math.ceil(min / 10);
    let end = Math.floor(max / 10);

    // 12'nin kaçıncı katını seçeceğiz
    let k = randomInt(start, end);

    return k * 10;
}

function Main() {
    var kare_y = 150; //top
    var kare_x = 200; //left

    const kare_speed = 10;

    var puan = 0;

    var kutu_random_xy = [randomMultipleOf12(3,1890),randomMultipleOf12(3,1000)];

    var kutu_entity = document.createElement("div");
    kutu_entity.className = "kutu";
    kutu_entity.id = "kutu";
    
    document.getElementById("BodyTag").appendChild(kutu_entity);

    kutu_entity.style.left = kutu_random_xy[0] + "px";
    kutu_entity.style.top = kutu_random_xy[1] + "px";

    console.log(kutu_random_xy[0]);

    document.addEventListener("keydown", function(event){
        console.log(event.key);
        var kare_entity = document.getElementById("kare");

        if(event.key == "ArrowUp") {
            if(kare_y > 0){kare_y -= kare_speed;}
        }
        else if(event.key == "ArrowDown"){
            kare_y += kare_speed;
        }
        else if(event.key == "ArrowLeft") {
            if(kare_x > 0){kare_x -= kare_speed;}
        }
        else if(event.key == "ArrowRight") {
            kare_x += kare_speed;
        }
        else if(event.key == "ArrowUp" && event.key == "ArrowLeft"){
            if(kare_y > 0){kare_y -= kare_speed;}
            if(kare_x > 0){kare_x -= kare_speed;}
        }

        kare_entity.style.top = kare_y + "px";
        kare_entity.style.left = kare_x + "px";

    if(kare_x == kutu_random_xy[0] && kare_y == kutu_random_xy[1]){
        puan += 1
        
        kutu_random_xy = [randomMultipleOf12(10,1900),randomMultipleOf12(6,1000)];
        kutu_entity.style.left = kutu_random_xy[0] + "px";
        kutu_entity.style.top = kutu_random_xy[1] + "px";

        document.getElementById("puanEtiketi").innerHTML = "Puan: "+puan;
        
    }
    });

}

Main();