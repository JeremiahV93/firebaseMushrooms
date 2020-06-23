const mycologistMaker = (mychologist) => {
  const domString = `
  <div class="col-3">
    <div class="card">
      <div class="card-body">
        <div class="card-header">${mychologist.name}</div>
        <p class="card-text">${mychologist.name} is ${mychologist.age} years old.</p>
      </div>
    </div>
  </div>
  `;
  return domString;
};

export default { mycologistMaker };
