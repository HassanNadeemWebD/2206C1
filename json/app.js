window.fetch(`https://api.cricapi.com/v1/cricScore?apikey=64944cf8-1183-4c94-87d6-3f6efea8a3f4`)
    .then(result => result.json())
    .then(result => {
        // let obj = result.data;
        // let myJson = JSON.stringify(obj);
        // document.write(myJson);
        // document.write(JSON.parse(myJson))

        // console.log(result.data);
        let container = document.getElementById("container");
        let html = '';

        result.data.forEach(element => {
            // document.write(element.t1 + "vs" + element.t2 + "<br/>" + element.status + "<br/>" + element.matchType)

            html += `  
            
            <div class="card " ">
 <img src="${element.t1img}" class="card-img-top" >
 <div class="card-body">
     <h5 class="card-title"> ${element.t1} VS ${element.t2} </h5>
   
 </div>
 <ul class="list-group list-group-flush">
     <li class="list-group-item">Match Type: ${element.matchType}</li>
     <li class="list-group-item">Match Timing: ${element.dateTimeGMT} </li>
     <li class="list-group-item">Status: ${element.status}</li>
 </ul>

</div>

`

        }




        )

        container.innerHTML = html



            ;



    })
    .catch(err => {
        console.log("An error occured. Please check your code", err);
    });
