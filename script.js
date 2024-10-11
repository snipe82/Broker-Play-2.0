
function login() {
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        // Simulamos un inicio de sesión exitoso
        document.querySelector('.login-form').style.display = 'none';
        document.getElementById('menu').style.display = 'block'; // Mostrar menú después del login
        document.getElementById('dashboard').style.display = 'none'; // Mostrar contenido
        document.getElementById('loading').style.display = 'none'; 
		// Actualizar el elemento con el ID 'logged-in-user' con el nombre del usuario
		document.getElementById('logged-in-user').textContent = 'Usuario Broker Cinta Negra AAA: Nestor';
    }, 2000); // Simulando un tiempo de carga
}

// Función para cargar la opción 1
function loadPage(pageId) {
    // Lista de todas las páginas que deseas manejar
    const pages = ['dashboard', 'searchPanel', 'goalsPanel', 'PostVenta', 'comparisonPanel', 'bigData']; // Agrega más IDs según tus necesidades
    // Oculta todas las páginas
    pages.forEach(page => {
        document.getElementById(page).style.display = 'none';
    });

    // Muestra la página especificada
    document.getElementById(pageId).style.display = 'block';
}
// Función para simular una búsqueda de persona
function searchPerson() {
    // Obtenemos el valor del input de búsqueda
    const searchInput = document.getElementById('searchInput').value;

    // Simulación de datos de una persona
    const person = {
        name: "Juan",
        lastName: "Pérez",
        age: 35,
        occupation: "Ingeniero",
		mobile: "+51 985523210",
        country: "Perú",
		mail: "pepito1802@yahoo.es",
        policies: [
            {
                insurer: "Aseguradora A",
                broker: "Broker X",
                coverage: "Cobertura Completa",
                acquisitionDate: "2022-01-15",
                paymentStatus: "Al día"
            },
            {
                insurer: "Aseguradora B",
                broker: "Broker Y",
                coverage: "Cobertura Parcial",
                acquisitionDate: "2023-05-20",
                paymentStatus: "Al día"
            }
        ]
    };

    // Simulamos una búsqueda exitosa y mostramos los resultados
    document.getElementById('clientName').innerText = person.name;
    document.getElementById('clientLastName').innerText = person.lastName;
    document.getElementById('clientAge').innerText = person.age;
    document.getElementById('clientOccupation').innerText = person.occupation;
    document.getElementById('clientMobile').innerText = person.mobile;
    document.getElementById('clientMail').innerText = person.mail;
    document.getElementById('clientCountry').innerText = person.country;

    // Mostrar las pólizas
    const policiesList = document.getElementById('policiesList');
    policiesList.innerHTML = ''; // Limpiamos el contenido anterior
    person.policies.forEach(policy => {
        const policyItem = document.createElement('li');
        policyItem.innerHTML = `
            <strong>Aseguradora:</strong> ${policy.insurer} <br>
            <strong>Broker:</strong> ${policy.broker} <br>
            <strong>Cobertura:</strong> ${policy.coverage} <br>
            <strong>Fecha de Adquisición:</strong> ${policy.acquisitionDate}
        `;
        policiesList.appendChild(policyItem);
    });

    // Estado de pago
    document.getElementById('paymentStatus').innerText = person.policies[0].paymentStatus;

    // Mostramos el panel de resultados
    document.getElementById('resultsPanel').style.display = 'block';
}
	function generateExcel() {
            // Datos que deseas agregar al archivo de Excel
            var data = [
                ["Datalake Insure Play", "", "", ""],
                ["Nombre Poliza", "Cliente",  "Documento","Coincidencia"],
                ["Seguro Total", "Juan Perez","25558423", "100%"],
                ["Seguro Fiestas", "Maria Escobar", "10125485","95%"],
                ["Seguro Viajes California", "Milagros Mendozaa","74158925", "56%"]
            ];

            // Crear una hoja de trabajo (worksheet) a partir de los datos
            var worksheet = XLSX.utils.aoa_to_sheet(data);

            // Crear un nuevo libro de trabajo (workbook)
            var workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja1");

            // Generar el archivo Excel y descargarlo
            XLSX.writeFile(workbook, "BigDataBrokerPlay.xlsx");
}
    // Función para formatear la fecha actual
    function formatDate() {
        const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        const now = new Date();
        const day = now.getDate();
        const month = months[now.getMonth()];
        const year = now.getFullYear();

        return `${day} ${month} ${year}`;
    }

    // Mostrar la fecha actual en el elemento con ID 'current-date'
    document.getElementById('current-date').textContent = formatDate();
	
	function enviarEstadoCuenta() {
	
	alert("¡Se envió el estado de cuenta al cliente!");
 
	}
	
	//Funciones cotizador de polizas
	document.getElementById('fetchPoliciesBtn').addEventListener('click', function() {
    // Simulación de búsqueda de pólizas
    const documentValue = document.getElementById('clientDocument').value;
    if (documentValue) {
        document.getElementById('section1').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
        document.getElementById('progressIndicator').style.width = '66%';
        
        // Aquí agregar la lógica para buscar las pólizas y agregarlas a la lista
    }
});

	// Lógica para seleccionar pólizas y habilitar el botón de envío
	document.getElementById('policiesComparisonList').addEventListener('click', function(event) {
		if (event.target.tagName === 'LI') {
			const selectedPolicy = event.target.innerText; // Ejemplo de cómo obtener la póliza seleccionada
			document.getElementById('selectedPolicyInfo').innerText = `Poliza seleccionada: ${selectedPolicy}`;
			document.getElementById('sendQuoteBtn').disabled = false; // Habilitar el botón
		}
	});

	const nextStepBtn = document.getElementById('nextStepBtn');
	const selectedPoliciesList = document.getElementById('selectedPoliciesList');
	const selectedPoliciesSummary = document.getElementById('selectedPoliciesSummary');
	const policyCheckboxes = document.querySelectorAll('.policy-checkbox');

	// Habilitar el botón "Siguiente" si al menos una póliza está seleccionada
	policyCheckboxes.forEach(checkbox => {
		checkbox.addEventListener('change', () => {
			const isAnyChecked = Array.from(policyCheckboxes).some(checkbox => checkbox.checked);
			nextStepBtn.disabled = !isAnyChecked;
		});
	});

	// Evento para pasar a la sección 3
	nextStepBtn.addEventListener('click', () => {
		const selectedPolicies = Array.from(policyCheckboxes)
			.filter(checkbox => checkbox.checked)
			.map(checkbox => checkbox.getAttribute('data-policy'));

		// Limpiar la lista de políticas seleccionadas
		selectedPoliciesList.innerHTML = '';
		selectedPolicies.forEach(policy => {
			const li = document.createElement('li');
			li.textContent = policy;
			selectedPoliciesList.appendChild(li);
		});

		// Mostrar la sección 3 y actualizar la barra de progreso
		document.getElementById('section2').style.display = 'none';
		document.getElementById('section3').style.display = 'block';
		document.getElementById('progressIndicator').style.width = '100%';

		// Habilitar el botón de envío si hay políticas seleccionadas
		document.getElementById('sendQuoteBtn').disabled = selectedPolicies.length === 0;
	});


	function enviarCotización() {
	
	alert("¡Se envió cotización al cliente!");
	document.getElementById('comparisonPanel').style.display = 'none';
	}