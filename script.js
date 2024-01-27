async function getMatchData(){

    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=3cb0d0bb-af67-416f-b0fa-ee287860d04b&offset=0")
        .then(data => data.json())
        .then(data => {
            if (data.status != "success")return;

            const matchList = data.data;

            if(!matchList)return [];

            const releventData = matchList.map(match => `${match.name}, ${match.status}`);

            console.log({releventData});

            document.getElementById("matches").innerHTML = releventData.map(match => `<li>${match}</li>`).join('');

            return releventData;
        })
        .catch(e => console.log(e));
   

}

getMatchData();