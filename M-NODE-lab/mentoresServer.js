const obj = JSON.parse('{"id":"123456", "name":"Gabriel","email":"gabriel@ada-school.org"}',
'{"id":"789456", "name":"santiago","email":"santiago@ada-school.org"}',
'{"id":"852741", "name":"sergio","email":"Sergio@ada-school.org"}',
);

const mentorsList = () => {
   return obj;
}

module.exports = {
   mentorsListFunction : mentorsList,
}