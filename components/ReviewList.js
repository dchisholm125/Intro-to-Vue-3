app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br>
                "{{ review.review }}"
                <p v-if="review.recommend === 'true' ">{{ review.name }} recommends this product to others</p>
                <p v-if="review.recommend === 'false' ">{{ review.name }} does not recommend this product to others</p>
            </li>
        </ul>
    </div>`
})