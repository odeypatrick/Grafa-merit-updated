    //slide menu

    function openSlideMenu(){
        document.getElementById('side-menu').style.width = '250px';
    }

    function closeSlideMenu(){
        document.getElementById('side-menu').style.width = '0';
    }
   

    $(() => {

    $('.read-more').click(e => {
    e.preventDefault();
    $('#about_us').toggleClass('shift')
    })

        // read more

        $('.read1').click((e) => {
        e.preventDefault();
            $('.more1').slideToggle();
            $('.read').slideToggle();
            $('.hide').slideToggle();
        })

        // form validation and sending of mail to the server

        $('#form').submit((e) => {
            e.preventDefault();
            if($('#name').val() == '' || $('#email').val() == '' || $('#msg').val() == ''){
                $('.query').html('<p>fill in the inputs correctly<span id="x">&times;</span></p>')
            }
            else if(document.getElementById('msg').value.length < 50){
                $('.query').html('<p>Message must be at least 20 characters<span id="x">&times;</span></p>')
            }
            else{
                var name = $('#name').val();
                var email = $('#email').val();
                var msg = $('#msg').val();

                //ajax request to backend

                $.ajax(
                    {
                        url: "backend/process.php",
                        method: 'POST',
                    data: {
                        name: name,
                        email: email,
                        msg: msg
                    },
                    success: (response) => {
                    $('.query').html(`<p>${response}<span id="x">&times;</span></p>`);
                    console.log(response)
                    },
                    error: (e) => {
                        console.log(e.statusText)
                    }
                }
            )

            setTimeout(() => {
                $('.query').html('');
            }, 5000)
        }
    })

    //smooth scroll

    $('.navi a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });

    $('.side-nav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }
    });


    //modal window click close vaidtion
    $(window).on('click', (e) => {
        if(e.target.id == ''){
            $('#side-menu').css("width", 0);
        }
    })
})

