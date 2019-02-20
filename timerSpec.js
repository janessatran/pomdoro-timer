describe(function(){
    var form;
  
    beforeEach(function(){
      form = $("<button class='button play' id='play'></button> ");
      $(document.body).append(form);
    });
  
    it('should call the play() function when clicked', function(){
        var spyEvent = spyOnEvent($('#play'), 'click');
        $('#play').trigger( "click" );
        expect('click').toHaveBeenTriggeredOn($('#play'));
        expect(spyEvent).toHaveBeenTriggered();
  
    })
  
    afterEach(function(){
     form.remove();
     form = null;
    });
  });