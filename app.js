// Global Weather Dashboard Application - Fully Functional Version
class WeatherDashboard {
    constructor() {
        // Comprehensive world cities database with realistic weather data
        this.worldCities = [
            {"name": "New York", "country": "USA", "lat": 40.7128, "lon": -74.0060, "timezone": "America/New_York", "flag": "🇺🇸", "temp": 22, "condition": "clear", "humidity": 45, "wind": 12},
            {"name": "London", "country": "UK", "lat": 51.5074, "lon": -0.1278, "timezone": "Europe/London", "flag": "🇬🇧", "temp": 15, "condition": "clouds", "humidity": 78, "wind": 8},
            {"name": "Tokyo", "country": "Japan", "lat": 35.6762, "lon": 139.6503, "timezone": "Asia/Tokyo", "flag": "🇯🇵", "temp": 28, "condition": "clear", "humidity": 62, "wind": 5},
            {"name": "Paris", "country": "France", "lat": 48.8566, "lon": 2.3522, "timezone": "Europe/Paris", "flag": "🇫🇷", "temp": 18, "condition": "clouds", "humidity": 71, "wind": 10},
            {"name": "Sydney", "country": "Australia", "lat": -33.8688, "lon": 151.2093, "timezone": "Australia/Sydney", "flag": "🇦🇺", "temp": 24, "condition": "clear", "humidity": 55, "wind": 15},
            {"name": "Mumbai", "country": "India", "lat": 19.0760, "lon": 72.8777, "timezone": "Asia/Kolkata", "flag": "🇮🇳", "temp": 32, "condition": "clouds", "humidity": 85, "wind": 7},
            {"name": "Dubai", "country": "UAE", "lat": 25.2048, "lon": 55.2708, "timezone": "Asia/Dubai", "flag": "🇦🇪", "temp": 38, "condition": "clear", "humidity": 35, "wind": 18},
            {"name": "Singapore", "country": "Singapore", "lat": 1.3521, "lon": 103.8198, "timezone": "Asia/Singapore", "flag": "🇸🇬", "temp": 30, "condition": "rain", "humidity": 88, "wind": 3},
            {"name": "Barcelona", "country": "Spain", "lat": 41.3851, "lon": 2.1734, "flag": "🇪🇸", "temp": 25, "condition": "clear", "humidity": 60, "wind": 9},
            {"name": "Amsterdam", "country": "Netherlands", "lat": 52.3676, "lon": 4.9041, "flag": "🇳🇱", "temp": 14, "condition": "rain", "humidity": 82, "wind": 12},
            {"name": "Rome", "country": "Italy", "lat": 41.9028, "lon": 12.4964, "flag": "🇮🇹", "temp": 27, "condition": "clear", "humidity": 58, "wind": 6},
            {"name": "Bangkok", "country": "Thailand", "lat": 13.7563, "lon": 100.5018, "flag": "🇹🇭", "temp": 34, "condition": "thunderstorm", "humidity": 75, "wind": 4},
            {"name": "Seoul", "country": "South Korea", "lat": 37.5665, "lon": 126.9780, "flag": "🇰🇷", "temp": 20, "condition": "clouds", "humidity": 68, "wind": 8},
            {"name": "Toronto", "country": "Canada", "lat": 43.6532, "lon": -79.3832, "flag": "🇨🇦", "temp": 16, "condition": "rain", "humidity": 73, "wind": 11},
            {"name": "Berlin", "country": "Germany", "lat": 52.5200, "lon": 13.4050, "flag": "🇩🇪", "temp": 12, "condition": "clouds", "humidity": 76, "wind": 9},
            {"name": "São Paulo", "country": "Brazil", "lat": -23.5505, "lon": -46.6333, "flag": "🇧🇷", "temp": 26, "condition": "rain", "humidity": 78, "wind": 7},
            {"name": "Istanbul", "country": "Turkey", "lat": 41.0082, "lon": 28.9784, "flag": "🇹🇷", "temp": 21, "condition": "clear", "humidity": 65, "wind": 13},
            {"name": "Cairo", "country": "Egypt", "lat": 30.0444, "lon": 31.2357, "flag": "🇪🇬", "temp": 35, "condition": "clear", "humidity": 25, "wind": 14},
            {"name": "Mexico City", "country": "Mexico", "lat": 19.4326, "lon": -99.1332, "flag": "🇲🇽", "temp": 23, "condition": "clouds", "humidity": 52, "wind": 5},
            {"name": "Lagos", "country": "Nigeria", "lat": 6.5244, "lon": 3.3792, "flag": "🇳🇬", "temp": 29, "condition": "rain", "humidity": 85, "wind": 6},
            {"name": "Buenos Aires", "country": "Argentina", "lat": -34.6118, "lon": -58.3960, "flag": "🇦🇷", "temp": 19, "condition": "clear", "humidity": 61, "wind": 10},
            {"name": "Moscow", "country": "Russia", "lat": 55.7558, "lon": 37.6176, "flag": "🇷🇺", "temp": 8, "condition": "snow", "humidity": 89, "wind": 15},
            {"name": "Hong Kong", "country": "China", "lat": 22.3193, "lon": 114.1694, "flag": "🇭🇰", "temp": 28, "condition": "clouds", "humidity": 80, "wind": 8},
            {"name": "Cape Town", "country": "South Africa", "lat": -33.9249, "lon": 18.4241, "flag": "🇿🇦", "temp": 22, "condition": "clear", "humidity": 55, "wind": 18},
            {"name": "Reykjavik", "country": "Iceland", "lat": 64.1466, "lon": -21.9426, "flag": "🇮🇸", "temp": 5, "condition": "clouds", "humidity": 82, "wind": 22},
            {"name": "Oslo", "country": "Norway", "lat": 59.9139, "lon": 10.7522, "flag": "🇳🇴", "temp": 9, "condition": "rain", "humidity": 85, "wind": 16},
            {"name": "Stockholm", "country": "Sweden", "lat": 59.3293, "lon": 18.0686, "flag": "🇸🇪", "temp": 11, "condition": "clouds", "humidity": 74, "wind": 12},
            {"name": "Helsinki", "country": "Finland", "lat": 60.1699, "lon": 24.9384, "flag": "🇫🇮", "temp": 7, "condition": "snow", "humidity": 88, "wind": 19},
            {"name": "Vienna", "country": "Austria", "lat": 48.2082, "lon": 16.3738, "flag": "🇦🇹", "temp": 17, "condition": "clear", "humidity": 58, "wind": 7},
            {"name": "Brussels", "country": "Belgium", "lat": 50.8503, "lon": 4.3517, "flag": "🇧🇪", "temp": 13, "condition": "rain", "humidity": 79, "wind": 11},
            {"name": "Zurich", "country": "Switzerland", "lat": 47.3769, "lon": 8.5417, "flag": "🇨🇭", "temp": 16, "condition": "clouds", "humidity": 65, "wind": 8},
            {"name": "Copenhagen", "country": "Denmark", "lat": 55.6761, "lon": 12.5683, "flag": "🇩🇰", "temp": 13, "condition": "rain", "humidity": 77, "wind": 14},
            {"name": "Warsaw", "country": "Poland", "lat": 52.2297, "lon": 21.0122, "flag": "🇵🇱", "temp": 15, "condition": "clouds", "humidity": 70, "wind": 9},
            {"name": "Prague", "country": "Czech Republic", "lat": 50.0755, "lon": 14.4378, "flag": "🇨🇿", "temp": 14, "condition": "clear", "humidity": 63, "wind": 7},
            {"name": "Budapest", "country": "Hungary", "lat": 47.4979, "lon": 19.0402, "flag": "🇭🇺", "temp": 18, "condition": "clouds", "humidity": 66, "wind": 6},
            {"name": "Lisbon", "country": "Portugal", "lat": 38.7223, "lon": -9.1393, "flag": "🇵🇹", "temp": 24, "condition": "clear", "humidity": 58, "wind": 11},
            {"name": "Madrid", "country": "Spain", "lat": 40.4168, "lon": -3.7038, "flag": "🇪🇸", "temp": 26, "condition": "clear", "humidity": 42, "wind": 8},
            {"name": "Athens", "country": "Greece", "lat": 37.9838, "lon": 23.7275, "flag": "🇬🇷", "temp": 29, "condition": "clear", "humidity": 51, "wind": 12},
            {"name": "Dublin", "country": "Ireland", "lat": 53.3498, "lon": -6.2603, "flag": "🇮🇪", "temp": 12, "condition": "rain", "humidity": 84, "wind": 15},
            {"name": "Edinburgh", "country": "Scotland", "lat": 55.9533, "lon": -3.1883, "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "temp": 10, "condition": "clouds", "humidity": 81, "wind": 13},
            {"name": "Vancouver", "country": "Canada", "lat": 49.2827, "lon": -123.1207, "flag": "🇨🇦", "temp": 18, "condition": "rain", "humidity": 75, "wind": 10}
        ];

        this.weatherIcons = {
            "clear": "☀️",
            "clouds": "☁️", 
            "rain": "🌧️",
            "drizzle": "🌦️",
            "thunderstorm": "⛈️",
            "snow": "🌨️",
            "mist": "🌫️",
            "fog": "🌫️"
        };

        // Featured cities that show by default
        this.featuredCities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Mumbai', 'Dubai', 'Singapore'];

        this.userLocations = [];
        this.isMetric = true;
        this.searchTerm = '';
        this.sortBy = 'name';
        this.autoRefreshInterval = null;
        this.currentDeleteCity = null;

        this.initializeApp();
    }

    // Initialize the application
    async initializeApp() {
        this.setupEventListeners();
        this.loadUserLocations();
        await this.loadWeatherData();
        this.startAutoRefresh();
        this.hideLoading();
    }

    // Setup all event listeners
    setupEventListeners() {
        // Temperature toggle
        document.getElementById('tempToggle').addEventListener('click', () => {
            this.isMetric = !this.isMetric;
            this.renderWeatherGrid();
        });

        // Add location button
        document.getElementById('addLocationBtn').addEventListener('click', () => {
            this.openAddLocationModal();
        });

        // Refresh button
        document.getElementById('refreshBtn').addEventListener('click', async () => {
            await this.loadWeatherData();
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase().trim();
            this.renderWeatherGrid();
            searchClear.classList.toggle('visible', this.searchTerm.length > 0);
        });

        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            this.searchTerm = '';
            this.renderWeatherGrid();
            searchClear.classList.remove('visible');
            searchInput.focus();
        });

        // Sort functionality
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.sortBy = e.target.value;
            this.renderWeatherGrid();
        });

        // Add Location Modal
        document.getElementById('addLocationClose').addEventListener('click', () => {
            this.closeAddLocationModal();
        });

        const locationSearchInput = document.getElementById('locationSearchInput');
        locationSearchInput.addEventListener('input', (e) => {
            this.handleLocationSearch(e.target.value);
        });

        // Use My Location
        document.getElementById('useMyLocationBtn').addEventListener('click', () => {
            this.useCurrentLocation();
        });

        // Forecast Modal
        document.getElementById('forecastClose').addEventListener('click', () => {
            this.closeForecastModal();
        });

        // Delete Modal
        document.getElementById('deleteClose').addEventListener('click', () => {
            this.closeDeleteModal();
        });
        document.getElementById('deleteCancelBtn').addEventListener('click', () => {
            this.closeDeleteModal();
        });
        document.getElementById('deleteConfirmBtn').addEventListener('click', () => {
            this.confirmDeleteLocation();
        });

        // Chatbot controls
        document.getElementById('chatbotToggle').addEventListener('click', () => {
            this.toggleChatbot();
        });
        document.getElementById('chatbotMinimize').addEventListener('click', () => {
            this.toggleChatbot();
        });
        document.getElementById('chatSend').addEventListener('click', () => {
            this.sendMessage();
        });
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Modal backdrop clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop')) {
                this.closeAllModals();
            }
        });

        // Escape key to close modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // Load user locations from localStorage
    loadUserLocations() {
        try {
            const saved = JSON.parse(localStorage.getItem('weatherDashboardLocations') || '[]');
            this.userLocations = saved.length > 0 ? saved : this.featuredCities.slice();
            console.log('Loaded user locations:', this.userLocations);
        } catch (error) {
            console.warn('Error loading saved locations, using featured cities:', error);
            this.userLocations = this.featuredCities.slice();
        }
    }

    // Save user locations to localStorage
    saveUserLocations() {
        try {
            localStorage.setItem('weatherDashboardLocations', JSON.stringify(this.userLocations));
            console.log('Saved user locations:', this.userLocations);
        } catch (error) {
            console.error('Error saving locations:', error);
            this.showToast('Error saving locations', 'error');
        }
    }

    // Generate realistic weather data with proper forecasts
    generateWeatherData(city) {
        const baseTemp = city.temp || (Math.floor(Math.random() * 35) + 5);
        const condition = city.condition || Object.keys(this.weatherIcons)[Math.floor(Math.random() * Object.keys(this.weatherIcons).length)];
        const humidity = city.humidity || (Math.floor(Math.random() * 60) + 30);
        const windSpeed = city.wind || (Math.floor(Math.random() * 25) + 5);
        const feelsLike = baseTemp + (Math.random() * 6 - 3);
        
        // Generate 5-day forecast
        const forecast = [];
        const conditions = Object.keys(this.weatherIcons);
        
        for (let i = 1; i <= 5; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);
            const forecastCondition = conditions[Math.floor(Math.random() * conditions.length)];
            const tempVariation = (Math.random() * 10) - 5; // ±5°C variation
            const high = Math.round(baseTemp + tempVariation + Math.random() * 5);
            const low = Math.round(high - (8 + Math.random() * 10)); // 8-18°C lower
            
            forecast.push({
                date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
                condition: forecastCondition,
                high: Math.max(high, low + 5),
                low: Math.min(low, high - 5),
                icon: this.weatherIcons[forecastCondition]
            });
        }

        return {
            ...city,
            current: {
                temperature: Math.round(baseTemp),
                condition: condition,
                humidity: humidity,
                windSpeed: windSpeed,
                feelsLike: Math.round(feelsLike),
                icon: this.weatherIcons[condition],
                timestamp: new Date().toISOString(),
                localTime: this.getLocalTime(city.timezone || 'UTC')
            },
            forecast: forecast
        };
    }

    // Get local time for timezone
    getLocalTime(timezone) {
        try {
            return new Date().toLocaleString('en-US', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        } catch (error) {
            return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        }
    }

    // Load weather data for user locations
    async loadWeatherData() {
        this.showLoading();
        
        try {
            await new Promise(resolve => setTimeout(resolve, 800));
            
            const weatherData = [];
            for (const locationName of this.userLocations) {
                const cityData = this.worldCities.find(city => 
                    city.name.toLowerCase() === locationName.toLowerCase()
                );
                
                if (cityData) {
                    weatherData.push(this.generateWeatherData(cityData));
                }
            }
            
            this.weatherData = weatherData;
            console.log('Weather data loaded for', weatherData.length, 'cities');
            
            this.renderWeatherGrid();
            this.updateLastUpdated();
            
        } catch (error) {
            console.error('Error loading weather data:', error);
            this.showToast('Failed to load weather data', 'error');
        } finally {
            this.hideLoading();
        }
    }

    // Render the weather grid
    renderWeatherGrid() {
        const grid = document.getElementById('weatherGrid');
        const emptyState = document.getElementById('emptyState');
        
        let filteredData = [...this.weatherData];

        // Apply search filter
        if (this.searchTerm && this.searchTerm.length > 0) {
            filteredData = filteredData.filter(city => 
                city.name.toLowerCase().includes(this.searchTerm) ||
                city.country.toLowerCase().includes(this.searchTerm)
            );
        }

        // Show empty state if no cities
        if (filteredData.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        } else {
            emptyState.classList.add('hidden');
        }

        // Apply sorting
        filteredData.sort((a, b) => {
            switch (this.sortBy) {
                case 'temp':
                    return b.current.temperature - a.current.temperature;
                case 'condition':
                    return a.current.condition.localeCompare(b.current.condition);
                case 'country':
                    return a.country.localeCompare(b.country);
                default:
                    return a.name.localeCompare(b.name);
            }
        });

        // Render cards
        grid.innerHTML = filteredData.map(city => this.createWeatherCard(city)).join('');
    }

    // Create weather card HTML
    createWeatherCard(city) {
        const temp = this.isMetric ? city.current.temperature : this.celsiusToFahrenheit(city.current.temperature);
        const feelsLike = this.isMetric ? city.current.feelsLike : this.celsiusToFahrenheit(city.current.feelsLike);
        const unit = this.isMetric ? '°C' : '°F';
        const windUnit = this.isMetric ? 'km/h' : 'mph';
        const windSpeed = this.isMetric ? city.current.windSpeed : Math.round(city.current.windSpeed * 0.621371);

        const tempClass = temp < 10 ? 'cold' : temp > 25 ? 'hot' : 'moderate';
        const flag = city.flag || '🌍';

        return `
            <div class="weather-card" onclick="dashboard.showForecast('${city.name}')">
                <button class="delete-btn" onclick="event.stopPropagation(); dashboard.showDeleteModal('${city.name}')" title="Remove ${city.name}">×</button>
                
                <div class="weather-card-header">
                    <div class="city-info">
                        <h3>${flag} ${city.name}</h3>
                        <div class="country">${city.country}</div>
                    </div>
                    <div class="weather-icon">${city.current.icon}</div>
                </div>
                
                <div class="temperature ${tempClass}">
                    ${Math.round(temp)}${unit}
                </div>
                
                <div class="weather-condition">
                    ${city.current.condition}
                </div>
                
                <div class="local-time">
                    Local time: ${city.current.localTime}
                </div>
                
                <div class="weather-details">
                    <div class="detail-item">
                        <div class="detail-label">Feels like</div>
                        <div class="detail-value">${Math.round(feelsLike)}${unit}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Humidity</div>
                        <div class="detail-value">${city.current.humidity}%</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Wind</div>
                        <div class="detail-value">${windSpeed} ${windUnit}</div>
                    </div>
                    <div class="detail-item">
                        <div class="detail-label">Updated</div>
                        <div class="detail-value">${new Date(city.current.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                    </div>
                </div>
            </div>
        `;
    }

    // Open Add Location Modal
    openAddLocationModal() {
        document.getElementById('addLocationModal').classList.remove('hidden');
        document.getElementById('locationSearchInput').focus();
        this.renderPopularCities();
    }

    // Close Add Location Modal
    closeAddLocationModal() {
        document.getElementById('addLocationModal').classList.add('hidden');
        document.getElementById('locationSearchInput').value = '';
        document.getElementById('searchSuggestions').classList.add('hidden');
    }

    // Handle location search with suggestions
    handleLocationSearch(query) {
        const suggestions = document.getElementById('searchSuggestions');
        
        if (query.length < 2) {
            suggestions.classList.add('hidden');
            return;
        }

        const matches = this.worldCities
            .filter(city => 
                city.name.toLowerCase().includes(query.toLowerCase()) ||
                city.country.toLowerCase().includes(query.toLowerCase())
            )
            .filter(city => !this.userLocations.includes(city.name))
            .slice(0, 8);

        if (matches.length === 0) {
            suggestions.classList.add('hidden');
            return;
        }

        suggestions.innerHTML = matches.map(city => `
            <div class="suggestion-item" onclick="dashboard.addLocationFromSearch('${city.name}')">
                <span class="suggestion-flag">${city.flag || '🌍'}</span>
                <div class="suggestion-info">
                    <div class="suggestion-name">${city.name}</div>
                    <div class="suggestion-country">${city.country}</div>
                </div>
            </div>
        `).join('');

        suggestions.classList.remove('hidden');
    }

    // Add location from search suggestion
    async addLocationFromSearch(cityName) {
        if (this.userLocations.includes(cityName)) {
            this.showToast('Location already added', 'info');
            return;
        }

        this.userLocations.push(cityName);
        this.saveUserLocations();
        await this.loadWeatherData();
        this.closeAddLocationModal();
        this.showToast(`${cityName} added to your dashboard`, 'success');
    }

    // Render popular cities
    renderPopularCities() {
        const popularGrid = document.getElementById('popularGrid');
        const popularCities = this.worldCities
            .filter(city => this.featuredCities.includes(city.name))
            .filter(city => !this.userLocations.includes(city.name))
            .slice(0, 8);

        popularGrid.innerHTML = popularCities.map(city => `
            <button class="popular-city" onclick="dashboard.addLocationFromSearch('${city.name}')">
                ${city.flag || '🌍'} ${city.name}
            </button>
        `).join('');
    }

    // Use current location (geolocation)
    useCurrentLocation() {
        if (!navigator.geolocation) {
            this.showToast('Geolocation not supported', 'error');
            return;
        }

        this.showToast('Getting your location...', 'info');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                
                // Find closest city (simplified - in real app would use reverse geocoding)
                let closestCity = null;
                let minDistance = Infinity;

                this.worldCities.forEach(city => {
                    const distance = this.calculateDistance(latitude, longitude, city.lat, city.lon);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestCity = city;
                    }
                });

                if (closestCity) {
                    this.addLocationFromSearch(closestCity.name);
                } else {
                    this.showToast('Could not find nearby city', 'error');
                }
            },
            (error) => {
                console.error('Geolocation error:', error);
                this.showToast('Could not get your location', 'error');
            }
        );
    }

    // Calculate distance between coordinates
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    // Show delete confirmation modal
    showDeleteModal(cityName) {
        this.currentDeleteCity = cityName;
        document.getElementById('deleteCityName').textContent = cityName;
        document.getElementById('deleteModal').classList.remove('hidden');
    }

    // Close delete modal
    closeDeleteModal() {
        document.getElementById('deleteModal').classList.add('hidden');
        this.currentDeleteCity = null;
    }

    // Confirm delete location
    async confirmDeleteLocation() {
        if (!this.currentDeleteCity) return;

        const index = this.userLocations.indexOf(this.currentDeleteCity);
        if (index > -1) {
            const cityName = this.currentDeleteCity;
            this.userLocations.splice(index, 1);
            this.saveUserLocations();
            await this.loadWeatherData();
            this.showToast(`${cityName} removed from dashboard`, 'success');
        }

        this.closeDeleteModal();
    }

    // Show forecast modal
    showForecast(cityName) {
        const city = this.weatherData.find(c => c.name === cityName);
        if (!city) return;

        const modal = document.getElementById('forecastModal');
        const cityNameEl = document.getElementById('modalCityName');
        const forecastGrid = document.getElementById('forecastGrid');

        cityNameEl.textContent = `${city.flag || '🌍'} ${city.name}, ${city.country} - 5-Day Forecast`;
        
        forecastGrid.innerHTML = city.forecast.map(day => {
            const highTemp = this.isMetric ? day.high : this.celsiusToFahrenheit(day.high);
            const lowTemp = this.isMetric ? day.low : this.celsiusToFahrenheit(day.low);
            const unit = this.isMetric ? '°C' : '°F';

            return `
                <div class="forecast-day">
                    <div class="forecast-date">${day.date}</div>
                    <div class="forecast-condition">
                        <span>${day.icon}</span>
                        <span>${day.condition}</span>
                    </div>
                    <div class="forecast-temps">
                        <div class="forecast-high">${Math.round(highTemp)}${unit}</div>
                        <div class="forecast-low">${Math.round(lowTemp)}${unit}</div>
                    </div>
                </div>
            `;
        }).join('');

        modal.classList.remove('hidden');
    }

    // Close forecast modal
    closeForecastModal() {
        document.getElementById('forecastModal').classList.add('hidden');
    }

    // Close all modals
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
        this.currentDeleteCity = null;
    }

    // Toggle chatbot
    toggleChatbot() {
        const chatWindow = document.getElementById('chatbotWindow');
        chatWindow.classList.toggle('hidden');
        
        if (!chatWindow.classList.contains('hidden')) {
            document.getElementById('chatInput').focus();
        }
    }

    // Send message in chatbot
    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (!message) return;

        this.addMessage(message, 'user');
        input.value = '';

        this.showTypingIndicator();

        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.processWeatherQuery(message);
            this.addMessage(response, 'bot');
        }, 1200);
    }

    // Add message to chat
    addMessage(content, sender) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = `
            <div class="message-content">${content}</div>
            <div class="message-time">${time}</div>
        `;

        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Show/hide typing indicator
    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Process weather queries with enhanced AI-like responses
    processWeatherQuery(query) {
        const lowerQuery = query.toLowerCase();
        
        // Check for add city command
        const addMatch = lowerQuery.match(/add\s+(.+)/);
        if (addMatch) {
            const cityName = addMatch[1].trim();
            const city = this.worldCities.find(c => 
                c.name.toLowerCase().includes(cityName) ||
                cityName.includes(c.name.toLowerCase())
            );
            
            if (city) {
                if (!this.userLocations.includes(city.name)) {
                    this.addLocationFromSearch(city.name);
                    return `✅ I've added ${city.name} to your dashboard! You can see the weather data in a moment.`;
                } else {
                    return `${city.name} is already on your dashboard.`;
                }
            } else {
                return `I couldn't find a city matching "${cityName}". Try being more specific or check the spelling.`;
            }
        }

        // Find mentioned city
        const mentionedCity = this.worldCities.find(city => 
            lowerQuery.includes(city.name.toLowerCase())
        );

        // Weather for specific city
        if (mentionedCity && (lowerQuery.includes('weather') || lowerQuery.includes('temperature') || lowerQuery.includes('how') || lowerQuery.includes('what'))) {
            const cityData = this.weatherData.find(c => c.name === mentionedCity.name);
            if (cityData) {
                const temp = this.isMetric ? cityData.current.temperature : this.celsiusToFahrenheit(cityData.current.temperature);
                const unit = this.isMetric ? '°C' : '°F';
                const windUnit = this.isMetric ? 'km/h' : 'mph';
                const windSpeed = this.isMetric ? cityData.current.windSpeed : Math.round(cityData.current.windSpeed * 0.621371);
                return `🌡️ ${cityData.name} is currently ${Math.round(temp)}${unit} with ${cityData.current.condition} ${cityData.current.icon}.\nFeels like ${Math.round(this.isMetric ? cityData.current.feelsLike : this.celsiusToFahrenheit(cityData.current.feelsLike))}${unit} • Humidity: ${cityData.current.humidity}% • Wind: ${windSpeed} ${windUnit}\nLocal time: ${cityData.current.localTime}`;
            } else if (mentionedCity) {
                return `I don't have ${mentionedCity.name} on your dashboard yet. Would you like me to add it? Just type "add ${mentionedCity.name}".`;
            }
        }

        // Temperature comparisons
        if (lowerQuery.includes('coldest') || lowerQuery.includes('lowest')) {
            if (this.weatherData.length === 0) return "You don't have any cities on your dashboard yet.";
            const coldest = this.weatherData.reduce((prev, current) => 
                prev.current.temperature < current.current.temperature ? prev : current
            );
            const temp = this.isMetric ? coldest.current.temperature : this.celsiusToFahrenheit(coldest.current.temperature);
            const unit = this.isMetric ? '°C' : '°F';
            return `❄️ ${coldest.name} is the coldest at ${Math.round(temp)}${unit} with ${coldest.current.condition} ${coldest.current.icon}.`;
        }

        if (lowerQuery.includes('warmest') || lowerQuery.includes('hottest') || lowerQuery.includes('highest')) {
            if (this.weatherData.length === 0) return "You don't have any cities on your dashboard yet.";
            const warmest = this.weatherData.reduce((prev, current) => 
                prev.current.temperature > current.current.temperature ? prev : current
            );
            const temp = this.isMetric ? warmest.current.temperature : this.celsiusToFahrenheit(warmest.current.temperature);
            const unit = this.isMetric ? '°C' : '°F';
            return `🔥 ${warmest.name} is the warmest at ${Math.round(temp)}${unit} with ${warmest.current.condition} ${warmest.current.icon}.`;
        }

        // Condition searches
        const conditions = ['rain', 'sunny', 'cloud', 'clear', 'storm', 'snow', 'fog'];
        for (const condition of conditions) {
            if (lowerQuery.includes(condition)) {
                const matchingCities = this.weatherData.filter(city => 
                    city.current.condition.toLowerCase().includes(condition) ||
                    (condition === 'sunny' && city.current.condition.includes('clear'))
                );
                
                if (matchingCities.length > 0) {
                    const cityList = matchingCities.map(c => 
                        `${c.name} (${Math.round(this.isMetric ? c.current.temperature : this.celsiusToFahrenheit(c.current.temperature))}°${this.isMetric ? 'C' : 'F'})`
                    ).join(', ');
                    return `${matchingCities[0].current.icon} Cities with ${condition}y weather: ${cityList}`;
                } else {
                    return `No cities on your dashboard currently have ${condition}y weather.`;
                }
            }
        }

        // Forecast queries
        if (mentionedCity && (lowerQuery.includes('forecast') || lowerQuery.includes('tomorrow') || lowerQuery.includes('week'))) {
            const cityData = this.weatherData.find(c => c.name === mentionedCity.name);
            if (cityData && cityData.forecast.length > 0) {
                const tomorrow = cityData.forecast[0];
                const highTemp = this.isMetric ? tomorrow.high : this.celsiusToFahrenheit(tomorrow.high);
                const lowTemp = this.isMetric ? tomorrow.low : this.celsiusToFahrenheit(tomorrow.low);
                const unit = this.isMetric ? '°C' : '°F';
                return `📅 Tomorrow in ${cityData.name}: ${tomorrow.condition} ${tomorrow.icon}\nHigh: ${Math.round(highTemp)}${unit} • Low: ${Math.round(lowTemp)}${unit}\n\nClick on the ${cityData.name} card to see the full 5-day forecast!`;
            }
        }

        // Help
        if (lowerQuery.includes('help') || lowerQuery.includes('what can you do')) {
            return `🤖 I can help you with:\n\n• Weather info: "What's the weather in Tokyo?"\n• Comparisons: "Which city is coldest?"\n• Conditions: "Show me cities with rain"\n• Forecasts: "What's the forecast for Paris?"\n• Add cities: "Add Berlin" or "Add London"\n\nI work with all ${this.worldCities.length}+ cities in my database!`;
        }

        // Greetings
        if (lowerQuery.match(/^(hello|hi|hey|good morning|good afternoon|good evening)/)) {
            return `👋 Hello! I'm your weather assistant. I can help you with weather info for your dashboard cities, or I can add new cities for you. What would you like to know?`;
        }

        // Default response
        return `🌍 I can help you with weather information! Try asking about specific cities, comparisons, or type "add [city name]" to add new locations. Type "help" for more examples.`;
    }

    // Utility functions
    celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    updateLastUpdated() {
        document.getElementById('lastUpdated').textContent = new Date().toLocaleString();
    }

    startAutoRefresh() {
        if (this.autoRefreshInterval) {
            clearInterval(this.autoRefreshInterval);
        }
        
        this.autoRefreshInterval = setInterval(async () => {
            console.log('Auto-refreshing weather data...');
            await this.loadWeatherData();
        }, 5 * 60 * 1000); // 5 minutes
    }

    showLoading() {
        document.getElementById('loadingScreen').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingScreen').classList.add('hidden');
    }

    // Toast notification system
    showToast(message, type = 'info', duration = 4000) {
        const container = document.getElementById('toastContainer');
        const toastId = 'toast-' + Date.now();
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            warning: '⚠️'
        };

        const toast = document.createElement('div');
        toast.id = toastId;
        toast.className = `toast toast--${type}`;
        toast.innerHTML = `
            <div class="toast-icon">${icons[type] || 'ℹ️'}</div>
            <div class="toast-content">
                <div class="toast-message">${message}</div>
            </div>
            <button class="toast-close" onclick="this.parentElement.remove()">×</button>
        `;

        container.appendChild(toast);

        // Auto remove
        setTimeout(() => {
            const toastElement = document.getElementById(toastId);
            if (toastElement) {
                toastElement.remove();
            }
        }, duration);
    }
}

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new WeatherDashboard();
    console.log('Weather Dashboard initialized successfully');
});

// Service worker registration (for potential future PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker registration would go here in a real app
        console.log('Weather Dashboard ready');
    });
}