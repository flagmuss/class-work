(function(){
    var id = 1,
        qs = document.querySelector.bind(document),
        ce = document.createElement.bind(document),
        tasks = [],
        input = qs('#task-input'),
        taskContainer = qs('.task-list');



    //[data-id = "1" data-remove="2" {data-id:1, data-remove:3}



    function createElement(elemName, options, attributes){
        var elem = ce(elemName);

        Object.assign(elem, options);

       object.keys(attributes).forEach(function(key){
           elem.setAttribute(key, attributes[key]);
       });
        return elem;
    }



    function Task(text){
        var dateCreated = new Date();
        this.checked = false;
        this.text = text || '';
        this.id = id++;

        Object.defineProperty(this, 'dateCreated', {get: function(){
            return `${dateCreated.getDate()}/${dateCreated.getMonth()}/${dateCreated.getFullYear()}`;
        }})
    }

    function createTask(event){
        if(event.keyCode === 13){
            var text = event.target.value;
            if(text){
                var task = new Task(text);
                tasks.push(task);
                renderTask(task);
                event.target.value = '';
            }
        }
    }

    function renderTask(task){
        var removeButton = createElement('DIV',
            {innerText: '×', className: 'remove-button'});

        removeButton.setAttribute('data-remove', task.id);

        var textElem = createElement('DIV',
            {innerText: task.text, className: 'task-text'});

        var dateElem = createElement('DIV',
            {innerText: task.dateCreated, className: 'task-date'});

        var checkboxElem = createElement('INPUT',
            {type: 'checkbox', className: 'task-checkbox'});

        checkboxElem.setAttribute('data-check', task.id);

        var taskElem = createElement('DIV', {className: 'task'}, {'data-id: '});

        taskElem.setAttribute('data-id', task.id);

        taskElem.innerHTML += checkboxElem.outerHTML +
            textElem.outerHTML +
            removeButton.outerHTML +
            dateElem.outerHTML;

        taskContainer.appendChild(taskElem);
    }

    function onRemoveClick(event){
        var taskId = event.target.getAttribute('data-remove');
        if(taskId){
            qs('[data-id="'+ taskId +'"]').remove();
        }
    }
    function OnCheckClick (event){
        var taskId =  event.target.getAttribute('data-check');

        if(taskId){
            qs('[data-id="'+ taskId + '"]').classList.toggle('checked');
        }
    }

    input.addEventListener('keypress', createTask);
    taskContainer.addEventListener('click', onRemoveClick);
    taskContainer.addEventListener('click', OnCheckClick);

})();