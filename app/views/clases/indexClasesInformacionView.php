<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="./css/tables.css">
	<title>Tutorias</title>
</head>
	
<body>
	<div id="contenido" class="contenido">
		
		<div  style = "margin-top: 40px">
			<h1>Información clases</h1>
			
			<div>
				<table>
					<tr>
						<th>Clases (ID)</th>
						<th>Fechas</th>
						<th>Hora</th>
						<th>Clases pagadas</th>
					</tr>
				
				<?php 
					if($clasesInformacion!=null){
						foreach($clasesInformacion as $num => $clase){
							echo "<tr>";
							echo "<td>" . $clase->OID_C . "</td>";
							echo "<td>" . $clase->FECHA . "</td>";
							echo "<td>" . $clase->HORAINICIO . "</td>";
							if ($clase->CANTIDAD == null) {
								echo "<td>Incluidas en oferta</td>";
							} else{
								echo "<td>" . $clase->CANTIDAD . "</td>";
							}
							echo "</tr>";
						}
					}
				?>
				</table>
				<?php echo $_SESSION["paginator"]->createLinks(4,'paginatorButtons'); ?>
			</div>
		</div>
	</div>
	
</body>
</html>