let textarea = document.querySelector("textarea");
        let file_name = document.querySelector(".file_name input");
        let select_menu = document.querySelector(".select-menu select");
        let save_btn = document.querySelector(".save-btn");


        //Adding click event to the button
        save_btn.addEventListener("click", () => {
            let blob = new Blob([textarea.value], { type: select_menu.value })
            // URL.createObjectURL createsa URL that represent passed object
            let file_url = URL.createObjectURL(blob);


            let link = document.createElement("a");    //creating anchor tag
            link.download = file_name.value;           //passing file name as download
            link.href = file_url;                      //passing file url as href value of link
            link.click();
        })


        //On option value change button text also changed
        select_menu.addEventListener("change", () => {
            let selectedOption = select_menu.options[select_menu.selectedIndex].text.split("(")[0];
            save_btn.innerText = `Save as ${selectedOption}`;
        });