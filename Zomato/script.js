let count = 0;
        function handle()
         {
            count += 1;
            console.log(count);
            document.getElementsByClassName('any').innerText = count; 
        }