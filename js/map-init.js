let map;
let markers = [];

function initMap() {
    try {
        // Configuração inicial do mapa
        const mapOptions = {
            center: { lat: 38.7223, lng: -9.1393 }, // Centro em Lisboa
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.HYBRID, // Modo híbrido (satélite + etiquetas)
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_RIGHT,
                mapTypeIds: [
                    google.maps.MapTypeId.HYBRID,
                    google.maps.MapTypeId.ROADMAP
                ]
            }
        };

        // Cria o mapa
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        // Tenta obter a localização do usuário
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    map.setCenter(location);
                    map.setZoom(12);
                },
                (error) => {
                    console.error('Erro ao obter localização:', error);
                }
            );
        }
    } catch (error) {
        console.error('Erro ao inicializar o mapa:', error);
    }
}
