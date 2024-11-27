$(document).ready(function () {
    // Adiciona uma tarefa à lista ao submeter o formulário
    $("#taskForm").on("submit", function (event) {
      event.preventDefault();
      const task = $("#taskInput").val().trim();
  
      if (task) {
        $("#taskList").append(`<li>${task}</li>`);
        $("#taskInput").val(""); // Limpa o campo de entrada
      }
    });
  
    // Aplica a linha sobre o texto ao clicar no item da lista
    $("#taskList").on("click", "li", function () {
      $(this).toggleClass("completed");
    });
  });