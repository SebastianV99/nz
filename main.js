var map = L.map('map').setView([-44.7, 169.15], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-44.7, 169.15]).addTo(map)
            .bindPopup('Wanaka')
            .openPopup();