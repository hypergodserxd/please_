@import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #ff9a9e, #fad0c4);
    font-family: 'Sriracha', cursive;
    text-align: center;
}

.container h1 {
    font-size: 5rem;
    color: white;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}
