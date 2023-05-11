//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/organisation-answer', function(request, response) {

var country = request.session.data['organisation']
if (country == "Trust"){
    response.redirect("/sprint_1/homepage")
} else {
    response.redirect("/sprint_1/homepage")
}
})