<?php
//FUNCIONES PARA EL FRONT CONTROLLER (index.php)

function loadController($controller){
	$controller = ucwords($controller).'Controller';
	$strFileController=__DIR__.'/../app/controllers/'.$controller.'.php';

	if(isset($_GET["action"]))
		ErrorHandler::check($controller,$_GET["action"]);
	else
		ErrorHandler::check($controller);

	if(!is_file($strFileController)){
		ErrorHandler::unknownError();
	}

	require_once $strFileController;
	$controllerObj = new $controller();
	return $controllerObj;
}
function loadAction($controllerObj, $action){
		$action = $action;
		$controllerObj->$action();
}

function doAction($controllerObj){
	if(isset($_GET["action"]) && method_exists($controllerObj, $_GET["action"])){
		loadAction($controllerObj, $_GET["action"]);
	}
	else{
		if(!method_exists($controllerObj, DEFAULT_ACTION))
			ErrorHandler::unknownError();
		else
			loadAction($controllerObj, DEFAULT_ACTION);	
	}
}
?>