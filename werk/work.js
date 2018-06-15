(function(){
    var id = 1,
        qs = document.querySelector.bind(document),
        ce = document.createElement.bind(document),
        tasks = [],
        input = qs('#task-input'),
        taskContainer = qs('.task-list');

    function createElement(elemName, options, attributes){
        attributes = attributes || {};
        var elem = ce(elemName);

        Object.assign(elem, options);


        Object.keys(attributes).forEach(function(key){
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
            {innerText: '×', className: 'remove-button'},
            {'data-remove': task.id});

        var textElem = createElement('DIV',
            {innerText: task.text, className: 'task-text'});

        var dateElem = createElement('DIV',
            {innerText: task.dateCreated, className: 'task-date'});

        var checkboxElem = createElement('INPUT',
            {type: 'checkbox', className: 'task-checkbox'},
            {'data-check': task.id});

        var taskElem = createElement('DIV',
            {className: 'task'}, {'data-id': task.id});

        taskElem.innerHTML += getElemsHtml([checkboxElem, textElem, removeButton, dateElem]);

        taskContainer.appendChild(taskElem);
    }

    function getElemsHtml(elems){
        return elems.map(
            function (elem){ return elem.outerHTML}
        ).join('');
    }

    function onRemoveClick(event){
        var taskId = event.target.getAttribute('data-remove');

        if(taskId){
            qs('[data-id="'+ taskId +'"]').remove();
        }
    }

    function onCheckClick(event){
        var taskId = event.target.getAttribute('data-check');

        if(taskId){
            qs('[data-id="'+ taskId +'"]').classList.toggle('checked');
        }
    }


    input.addEventListener('keypress', createTask);
    taskContainer.addEventListener('click', onRemoveClick);
    taskContainer.addEventListener('click', onCheckClick);
})();

/* StorageServise.js           app.js

function Storage(){
addTask()
removeTaskById()
SetTask()
UpdateTask()
}
 */