<template>
    <div class="floatSurvey">
        <div class="container surveyContainer">
            <img class="logoImg" src="/frontend-assets/img/core-img/logo.png" alt="">
            <div class="row">
                <div class="col-12 col-lg-5">
                    <p>Welcome to SmartAgro! Let us know what brings you to SmartAgro and we’ll help you get the most value from our service.</p>

                    <template v-if="this.$route.params.usertype == 'farmer'">
                        <h3 class="text-muted">Farmer details</h3>
                        <div class="mb-3">
                            <label for="acres">The number of acres I farm is: (*)</label>
                            <div class="input-group">
                                <input type="number" class="form-control form-control-sm" id="acres"
                                       minlength="1" maxlength="4"
                                       v-model="userDetails.acres">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">ac</div>
                                </div>
                            </div>
                            <template v-if="errors.acres && Array.isArray(errors.acres) ? errors.acres[0] : errors.acres">
                                <p class="text-danger mt-1">{{ errors.acres && Array.isArray(errors.acres) ? errors.acres[0] : errors.acres }}</p>
                            </template>
                        </div>

                        <div class="mb-3">
                            <label for="acres">What kind of product do you produce? (*)</label>
                            <select name="farmerType" id="State" class="form-control form-control-sm" v-model="userDetails.farmerType">
                                <option value="" selected disabled>Select</option>
                                <option value="crops" selected>Crops</option>
                                <option value="fruits & vegetables" selected>Fruits & Vegetables</option>
                                <option value="live Stock" selected>Live Stock</option>
                                <option value="aquaculture" selected>Aquaculture</option>
                            </select>
                            <template v-if="errors.farmerType && Array.isArray(errors.farmerType) ? errors.farmerType[0] : errors.farmerType">
                                <p class="text-danger mt-1">{{ errors.farmerType && Array.isArray(errors.farmerType) ? errors.farmerType[0] : errors.farmerType }}</p>
                            </template>
                        </div>
                    </template>


                    <template v-if="this.$route.params.usertype == 'retailer'">
                        <h3 class="text-muted">Retailer details</h3>
                        <div class="mb-3">
                            <label for="retailer_interest">What products you are interested in? (*)</label>
                            <div class="input-group">
                                <input type="text" class="form-control form-control-sm" id="retailer_interest"
                                       placeholder="Crops, Fruits, Vegetables, Fish"
                                       v-model="userDetails.retailer_interest">
                            </div>
                            <template v-if="errors.retailer_interest && Array.isArray(errors.retailer_interest) ? errors.retailer_interest[0] : errors.retailer_interest">
                                <p class="text-danger mt-1">{{ errors.retailer_interest && Array.isArray(errors.retailer_interest) ? errors.retailer_interest[0] : errors.retailer_interest }}</p>
                            </template>
                        </div>

                    </template>

                    <template v-if="this.$route.params.usertype == 'agricultural-officer'">
                        <h3 class="text-muted">Agriculture officer details</h3>
                        <div class="mb-3">
                            <label for="retailer_interest">Office Name (*)</label>
                            <div class="input-group">
                                <input type="text" class="form-control form-control-sm" id="office_name"
                                       v-model="userDetails.office_name">
                            </div>
                            <template v-if="errors.office_name && Array.isArray(errors.office_name) ? errors.office_name[0] : errors.office_name">
                                <p class="text-danger mt-1">{{ errors.office_name && Array.isArray(errors.office_name) ? errors.office_name[0] : errors.office_name }}</p>
                            </template>
                        </div>

                        <div class="mb-3">
                            <label for="retailer_interest">Job Title (*)</label>
                            <div class="input-group">
                                <input type="text" class="form-control form-control-sm" id="job_title"
                                       v-model="userDetails.job_title">
                            </div>
                            <template v-if="errors.job_title && Array.isArray(errors.job_title) ? errors.job_title[0] : errors.job_title">
                                <p class="text-danger mt-1">{{ errors.job_title && Array.isArray(errors.job_title) ? errors.job_title[0] : errors.job_title }}</p>
                            </template>
                        </div>

                        <div class="mb-3">
                            <div class="form-group">
                                <label for="certificate">Certificate</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="certificate" ref="certificateFileInput"
                                           accept="pdf/*"
                                           @change="onFilePicked">
                                    <label class="custom-file-label" for="certificate">Choose file...</label>
                                </div>
                            </div>
                        </div>
                    </template>

                    <address-select-component
                        :address="userDetails.address"
                        :errors="this.errors"
                        @updateAddressValues="updateAddressData($event)"
                    />

                    <Custom_Loading_Button
                        class="mb-2"
                        Add_Input_Class="col-12"
                        @button_clicked="uploadUserDetails" :processing="processing">
                        <span>Submit</span>
                    </Custom_Loading_Button>
                </div>
                <div class="col-12 col-lg-7">
                    <img v-if="this.$route.params.usertype == 'farmer'"
                         src="//www.theindiaforum.in/sites/default/files/field/image/2019/10/01/Ramkumar%20Radhakrishnan%2C%20Wikimedia-1569929663.jpeg" alt=""
                         class="fullHeightImage rounded">
                    <img v-else-if="this.$route.params.usertype == 'retailer'"
                         src="//www.einfochips.com/blog/wp-content/uploads/2020/08/facial-recognition-transforming-retail-by-enhancing-in-store-customer-experience-improving-retailers-operational-efficiency-featured.jpg" alt=""
                         class="fullHeightImage rounded">
                    <img v-else-if="this.$route.params.usertype == 'agricultural-officer'"
                         src="//www.agriculture.com.ph/wp-content/uploads/2019/07/32Agricultural-Development-Officers_December-2018-744x426.png" alt=""
                         class="fullHeightImage rounded">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddressSelectComponent from "../components/AddressSelectComponent";
import {mapActions, mapGetters} from "vuex";
import auth from "../store/auth";
import store from "../store";

export default {
    name: "Survey",
    components: {AddressSelectComponent},
    data() {
        return {
            userDetails: {
                userType: '',
                acres: '',
                address: '',
                country_id: '',
                state_id: '',
                city_id: '',
                farmerType: '',
                retailer_interest: '',
                office_name: '',
                job_title: '',
            },
            processing: false,
            errors: []
        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user',
            roles: 'auth/roles',
            getUserDetailsErrors: 'user_state/userDetailsErrors',
            userDetailsStore: 'user_state/userDetails',
        }),
    },
    mounted() {
        this.getUserDetails().finally(() => {
            if (Object.keys(this.userDetailsStore).length) {
                this.$store.dispatch('snackbar/addSnack',
                    {color: 'info', msg: 'User details already added.', snakbarType: 'Information'},
                    {root: true});
                window.location.href = `/dashboard/@${this.user.username}/home`;
            }
        });
        this.checkCorrectUrl();
    },
    methods: {
        ...mapActions({
            storeUserDetails: 'user_state/storeUserDetails',
            clearUserDetailsError: 'user_state/clearError',
            getUserDetails: 'user_state/getUserDetails',
        }),
        checkCorrectUrl() {
            let route = this.$route.params.usertype;
            let userTypes = route.split('_');
            let count = 0;
            for (let role = 0; role < this.roles.length; role++) {
                if (userTypes.includes(this.roles[role])) {
                    count++
                }
            }
            //console.log(userTypes.length, count, this.roles.length)
            // Redirect if Url is not correct ....
            if (userTypes.length == this.roles.length && userTypes.length == count && count == this.roles.length) {
                this.userDetails.userType = this.$route.params.usertype;
                return;
            } else {
                return this.$router.replace({name: 'Index'});
            }
        },
        updateAddressData(value) {
            this.userDetails.address = value.address;
            this.userDetails.country_id = value.country_id;
            this.userDetails.state_id = value.state_id;
            this.userDetails.city_id = value.city_id;
        },
        onFilePicked(){

        },
        async uploadUserDetails() {
            let __this = this;
            __this.processing = true;
            __this.$Progress.start();
            __this.clearUserDetailsError();
            __this.errors = {};

            //__this.validateData();

            if (Object.keys(__this.errors).length) {
                __this.$Progress.fail();
                __this.processing = false;
                return
            }
            await this.storeUserDetails(this.userDetails).then(() => {

            }).finally(() => {
                __this.processing = false;
            });
            if (this.getUserDetailsErrors != null) {
                __this.$Progress.fail();
                __this.errors = this.getUserDetailsErrors;
                return
            }
            __this.$Progress.finish();
            window.location.href = `/dashboard/@${this.user.username}/home`;
        },
        validateData() {
            let __this = this;
            if (!__this.userDetails.userType.trim()) __this.errors.userType = 'User type is required.';
            if (this.$route.params.usertype == 'farmer') {
                if (!__this.userDetails.acres.toString().trim()) __this.errors.acres = 'Acres is required.';
                else if (parseFloat(__this.userDetails.acres) == 0) __this.errors.acres = "Are you sure you don't have any land?";
                else if (parseFloat(__this.userDetails.acres) > 500) __this.errors.acres = 'You own too much land.';
                if (!__this.userDetails.farmerType.trim()) __this.errors.farmerType = 'This field is required.';
            }
            if (this.$route.params.usertype == 'retailer') {
                if (!__this.userDetails.retailer_interest.trim()) __this.errors.retailer_interest = 'Please add your product interest.';
            }
            if (this.$route.params.usertype == 'agricultural-officer') {

            }
            if (!__this.userDetails.address.trim()) __this.errors.address = 'Address is required.';
            if (!__this.userDetails.country_id.toString().trim()) __this.errors.country_id = 'Country is required.';
            if (!__this.userDetails.state_id.toString().trim()) __this.errors.state_id = 'State/province  is required.';
        }
    }
}
</script>

<style scoped lang="css">
.floatSurvey {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    height: 100%;
    width: 100%;
    background: #fff;
}

.surveyContainer {
    padding: 4%;
}

.logoImg {
    height: 40px;
    width: auto;
}

.fullHeightImage {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
}
</style>
