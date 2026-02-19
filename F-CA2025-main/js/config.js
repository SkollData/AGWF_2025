const BASE_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6FZqHNIIn91b9yk85WkReoRaCoPIJ7jmS-F3ADRiAKyqrShfUpbVD5XKMl9hxDqm_59EUrAmFPkGp/pub?single=true&output=csv';
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzIzHq1AIfmjWT_4C6pNvBf9mC3ZoAU2ZSZ38G6Nxc3qdyYzLATmqeFdclHwMpbucIi_w/exec'; 
const GENERAL_MAP_URL = 'https://www.google.com/maps/d/embed?mid=1pSDyiRr5__bzvWkYNia0xoh7U4-5UIk';

const URLS = {
    main:      BASE_CSV_URL + '&gid=0',          
    mapas:     BASE_CSV_URL + '&gid=28808824',   
    distritos: BASE_CSV_URL + '&gid=196214038',  
    municipios:BASE_CSV_URL + '&gid=257151995',  
    pendientes:BASE_CSV_URL + '&gid=1071451463'  
};

// Datos por defecto en caso de fallo
const defaultDistrictsData = [
    { id: 2, url: '#' }, { id: 3, url: '#' }, { id: 4, url: '#' },
    { id: 5, url: '#' }, { id: 6, url: '#' }, { id: 7, url: '#' },
    { id: 8, url: '#' }, { id: 9, url: '#' }, { id: 10, url: '#' }
];