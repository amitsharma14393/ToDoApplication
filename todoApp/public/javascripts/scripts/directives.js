var directiveModule=angular.module("directiveModule",[]);

// add-todo
function linkAddToDo(scope,element,attrs){
	element.on('click',function($compile){
		var newToDoElement=angular.element("<div><input type='text' placeholder='Enter todo'>" +
				"<input type='text' placeholder='Enter description'>" +
				"<select></select>" +
				"</div>")
	});
}

directiveModule.directive("addTodo",function(){
	var directive={
		restrict:"A",
		compile:function(elem,attrs,transcludefn){
			return linkAddToDo;
		}
	};
	return directive;
});