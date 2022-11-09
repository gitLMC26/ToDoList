let addTodoList = document.querySelector("#myToDoList");
addTodoList.addEventListener("click", addList);

function addList(){
    addTodoList.style.display = "none";
    let form_container = document.querySelector(".form_container");
    let div_parent = document.createElement("div");
    div_parent.classList = "divParent";

    // let curr_date = document.createElement("h5");
    // curr_date.id = "currDate";
    // let curr_month = getMonth();
    // let curr_d = getDate();
    // let curr_year = getFullYear();

    // curr_date.textContent = curr_month+"-"+curr_d+"-"+curr_year;

    let input_div = document.createElement("div");
    input_div.classList = "inputDiv";

    let input_field1 = document.createElement("input");
    input_field1.type = "text";
    input_field1.classList = "inputFields";
    input_field1.placeholder = "Enter your desired task";
    
    let add_btn = document.createElement("button");
    add_btn.type = "submit";
    add_btn.classList = "addBtn";
    add_btn.innerHTML = "<span class='material-symbols-sharp'>add</span>";

    form_container.appendChild(div_parent);
    div_parent.appendChild(input_div);
    // input_div.appendChild(curr_date);
    input_div.appendChild(input_field1);
    input_div.appendChild(add_btn);

    add_btn.addEventListener("click", addTask);

    function addTask(){
        let div_child = document.createElement("div");
        div_child.classList = "divChild";

        let numChild = document.querySelector(".divParent").childElementCount;

        if(numChild===11)
        {
            add_btn.setAttribute("disabled", "");
        }
        
        let check_input = document.createElement("input");
        check_input.type = "checkbox";
        check_input.classList = "checkFields";
        check_input.addEventListener("change", checkNot);

        function checkNot(){
            if(this.checked)
            {
                input_field2.style.color = "#00cc00";
            }

            else{
                input_field2.style.color = "red";
            }
        }

        let input_field2 = document.createElement("input");
        input_field2.type = "text";
        input_field2.classList = "inputFields";
        input_field2.setAttribute("disabled", "");
        input_field2.style.color = "red";
        input_field2.defaultValue = input_field1.value;
         
        let edit_btn = document.createElement("button");
        edit_btn.type = "submit";
        edit_btn.classList = "editBtn";
        edit_btn.innerHTML = "<span class='material-symbols-sharp'>edit</span>";
        edit_btn.addEventListener("click", editTask);

        function editTask(){
            input_field2.removeAttribute("disabled", "");
            edit_btn.setAttribute("disabled", "");
            let save_btn = document.createElement("button");
            save_btn.type = "submit";
            save_btn.classList = "saveBtn";
            save_btn.innerHTML = "<span class='material-symbols-sharp'>save</span>";
            div_child.insertBefore(save_btn, div_child.lastElementChild);
            save_btn.addEventListener("click", saveTask);

            function saveTask(){
                let prompt = "Are you sure you want to save "+input_field2.value+" ?";

                if(confirm(prompt)===true)
                {
                    input_field2.setAttribute("disabled", "");
                    let newValue = input_field2.value;
                    input_field2.defaultValue = newValue;
                    div_child.removeChild(save_btn);
                    prompt = "Saved Successfully";
                    edit_btn.removeAttribute("disabled", "");
                }

                else{
                    prompt = "Cancelled";
                    input_field2.setAttribute("disabled", "");
                    div_child.removeChild(save_btn);
                    edit_btn.removeAttribute("disabled", "");
                    input_field2.value = input_field2.defaultValue;
                }
                alert(prompt);
            }
        }
    
        let delete_btn = document.createElement("button");
        delete_btn.type = "submit";
        delete_btn.classList = "deleteBtn";
        delete_btn.innerHTML = "<span class='material-symbols-sharp'>delete</span>";
        delete_btn.addEventListener("click", deleteTask);

        function deleteTask(){
            let delPrompt = "Are you sure you want to delete this task?";

            let childNum = document.querySelector(".divParent").childElementCount;
            console.log(childNum);

            if(childNum<13)
            {
                add_btn.removeAttribute("disabled", "");
            }

            if(confirm(delPrompt)===true)
            {
                div_parent.removeChild(div_child);
                delPrompt = "Deleted Successfully";
            }

            else{
                delPrompt = "Cancelled";
            }
            alert(delPrompt);
        }
        
        div_parent.appendChild(div_child);
        div_child.appendChild(check_input);
        div_child.appendChild(input_field2);
        div_child.appendChild(edit_btn);
        div_child.appendChild(delete_btn); 
        input_field1.value = "";
    }
}