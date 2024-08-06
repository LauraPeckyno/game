




//Select Player one
//https://scontent.fagc3-2.fna.fbcdn.net/o1/v/t0/f1/m255/upload_img_2367944_08_05_2024_12_11_57_383301_2756706575569245631.jpeg?_nc_ht=scontent.fagc3-2.fna.fbcdn.net&_nc_cat=109&ccb=9-4&oh=00_AYCfJ7dyYLJr_06Nb3rezTMH4EKvYQU6keYnpVDht_vQAg&oe=66B2F3D6&_nc_sid=5b3566

//Select Player two
// https://scontent.fagc3-2.fna.fbcdn.net/o1/v/t0/f1/m255/upload_img_67710769_08_05_2024_12_11_57_358095_7264220551358791248.jpeg?_nc_ht=scontent.fagc3-2.fna.fbcdn.net&_nc_cat=101&ccb=9-4&oh=00_AYDieoLoj_0uKG3SjrYqrXhkdYgWj-JgOiAAjtxmSiTGeA&oe=66B306F8&_nc_sid=5b3566

// on click, pop the player's selection to the bottom area. 

const character1 = document.getElementById("player1");
const character2 = document.getElementById("player2");
const field = document.querySelector(".battlefield");
const results = document.querySelector(".results");

const addtoBattle = (interaction) => {
    while (field.firstChild) {
        field.removeChild(field.firstChild); // kicks out the previously selected cat
    }
    let picture = document.createElement("img");
    picture.setAttribute("src", interaction.target.src);
    field.appendChild(picture);

};

character1.addEventListener("click", addtoBattle);
character1.addEventListener("click", addtoBattle);
character2.addEventListener("click", addtoBattle);


//--------------------
//dice roll

function rollDice() {
    let hit1 = Math.floor(Math.random() * 11); // generates a random number between 0 and 10
    let hit2 = Math.floor(Math.random() * 11); // generates a random number between 0 and 10
    let result = ''; //empty spot for the number

    // Compare the hits on each side
    if (hit1 > hit2) {
        result = `<p class="won">You hit for ${hit1} and your opponent hit for ${hit2}. <strong>You won!</strong></p>`;
    } else if (hit1 < hit2) {
        result = `<p class="lost">You hit for ${hit1} and your opponent hit for ${hit2}. <strong>You lost!</strong></p>`;
    } else {
        result = `<p class="tie">You hit for ${hit1} and your opponent hit for ${hit2}. <strong>A tie!</strong></p>`;
    }
    document.querySelector(".results").innerHTML = result;
}

fight.addEventListener("click", rollDice);

//how to assign winner for each round? The one who hits harder?
//This could be further improved by making cards that provide moves you can make. or moves/cards that will affect the hit? something like rock paper scissors?


