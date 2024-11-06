function getData() {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        const userContainer = document.getElementById("userContainer");
  
        for (let i = 0; i < 30; i++) {
          const user = data[i];
  
          const userCard = document.createElement("div");
          userCard.className = "user-card";
          userCard.innerHTML = `
          <h3>${i + 1}- ${user.login}</h3>
              <img src="${user.avatar_url}" alt="" width="200">
            `;
          userContainer.appendChild(userCard);
        }
      });
  }