// Empêcher le rafraichissement de la page
document.getElementById("bouton").addEventListener("click", function(event)
{
    //Cale empêche le rafraichissement de la page
    event.preventDefault();


    // appelle de la fonction qui ajoute un commentaire
    addComment();
});

function addComment (){
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let comment = document.getElementById("message").value;

    if (firstName === "" || lastName === "" || comment ===""){
        document.getElementById("error-message").style.display="block";
    }else {
        let newComment = document.createElement("div");
        newComment.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");
        newComment.innerHTML = `
            <div class="flex-1 py-10">
                <h3 class="font-medium text-gray-900">${firstName + " " + lastName}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${comment}</p>
                </div>
            </div>
        `;
    
        let commentList = document.getElementById("comment-list");
    
        commentList.appendChild(newComment);
    
        document.getElementById("first-name").value="";
        document.getElementById("last-name").value="";
        document.getElementById("message").value="";
        
        document.getElementById("error-message").style.display="none";

        }
    }


