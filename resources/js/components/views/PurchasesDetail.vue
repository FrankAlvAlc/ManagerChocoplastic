<template>
<v-app>
    <v-container>
        <v-dialog v-model="loading" persistent width="300">
            <v-card color="white">
                <v-card-text>
                    Cargando
                    <v-progress-linear indeterminate color="green" class="mb-0"></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-snackbar color="#000000" v-model="snackbar" :timeout="timeout">
            {{ textMsg }}
            <v-btn color="blue" text @click="snackbar = false">
                Cerrar
            </v-btn>
        </v-snackbar>
        <!--  Modal del diálogo para Alta y Edicion    -->
        <v-dialog v-model="dialog" max-width="800px">
            <v-card>
                <v-card-title class="cyan white--text">
                    <span class="headline">Buscar producto</span>
                </v-card-title>

                <v-data-table :headers="headers" :items="products" :search="search" sort-by="id" class="elevation-3">
                    <template v-slot:top>
                        <v-col cols="12" sm="12">
                            <v-text-field autofocus v-model="search" append-icon="search" label="Buscar" single-line hide-details></v-text-field>
                        </v-col>
                    </template>
                    <template v-slot:item.prod_saleprice="{ item }">
                        <v-label>${{formatMoney(item.prod_saleprice)}}</v-label>
                    </template>
                    <template v-slot:item.bulk="{ item }">
                        <v-chip v-if="item.prod_bulk == 1" color="green" outlined>
                            Granel</v-chip>
                        <v-chip v-else color="red" outlined>NA Granel</v-chip>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <v-btn class="mr-2" fab dark small color="green" @click="agregar(item)">
                            <v-icon dark>mdi-checkbox-marked-circle</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
            </v-card>

        </v-dialog>
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                         <v-col cols="4">
                            <v-card-text class="category d-inline-flex font-weight-light">
                                <v-label>
                                    <h3>Identificador: <br/> {{editadoHeader.prpu_identifier}}</h3>
                                </v-label>
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-text class="category d-inline-flex font-weight-light">
                                <v-label>
                                    <h3>Tipo:</h3> {{editadoHeader.prpu_type}}
                                </v-label>
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-text class="category d-inline-flex font-weight-light">
                                <v-label>
                                    <h3>Fecha:</h3> {{editadoHeader.created_at}}
                                </v-label>
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-text class="category d-inline-flex font-weight-light">
                                <v-label>
                                    <h3>Proveedor:</h3> {{editadoHeader.prov_name}}
                                </v-label>
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-text class="category d-inline-flex font-weight-light">
                                <v-label>
                                    <h3>Sucursal:</h3> {{editadoHeader.stor_name}}
                                </v-label>
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-text class="category d-inline-flex font-weight-light">
                                <v-label>
                                    <h3>Método de pago:</h3> {{editadoHeader.pame_name}}
                                </v-label>
                            </v-card-text>
                        </v-col>
                        <v-col cols="4">
                            <v-card-text class="category d-inline-flex font-weight-light">
                                <v-label>
                                    <h3>Número Nota / Factura:</h3> {{editadoHeader.prpu_observation}}
                                </v-label>
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>

            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-simple-table>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-left">ID</th>
                                    <th class="text-left">Producto</th>
                                    <th class="text-left">Unidad Medida</th>
                                    <th class="text-left">Cantidad</th>
                                    <th class="text-left">Precio($)</th>
                                    <th class="text-left">Importe</th>
                                    <th class="text-left">Descuento(%)</th>
                                    <th class="text-left">Descuento($)</th>
                                    <th class="text-left">Importe Total</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in desserts" :key="item.prod_name">
                                    <td>{{ item.prod_identifier }}</td>
                                    <td>{{ item.prod_name }}</td>
                                    <td>{{ item.meas_name }}</td>
                                    <td>{{ item.prpd_quantity }}</td>
                                    <td>{{ item.prpd_price }}</td>
                                    <td>{{ formatMoney((item.prpd_quantity * item.prpd_price)) }}</td>
                                    <td>{{ item.prpd_discountrate }}</td>
                                    <td>{{ formatMoney((item.prpd_quantity * item.prpd_price)*((item.prpd_discountrate/100))) }}</td>
                                    <td>${{ formatMoney((item.prpd_quantity * item.prpd_price)*(1- (item.prpd_discountrate/100))) }}</td>

                                </tr>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td>Subtotal</td>
                                    <td>${{formatMoney(subtotal)}}</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td>Descuento</td>
                                    <td>${{formatMoney(descuento)}}</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td>I.V.A.</td>
                                    <td>${{formatMoney(iva)}}</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td>IEPS</td>
                                    <td>${{formatMoney(ieps)}}</td>
                                    <td />
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td />
                                    <td>Total</td>
                                    <td>${{formatMoney(total)}}</td>
                                    <td />
                                </tr>
                            </tfoot>
                        </template>
                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</v-app>
</template>

<script>
import CripNotice from "crip-vue-notice";
export default {
    data() {
        return {
            headers: [{
                    text: 'Ident',
                    value: 'prod_identifier'
                },
                {
                    text: 'Nombre',
                    value: 'prod_name'
                },
                {
                    text: 'Unidad',
                    value: 'meas_fk_input_name'
                },
                {
                    text: 'Tipo',
                    value: 'bulk'
                },

                {
                    text: '',
                    value: 'action',
                    width: '20%'
                },
            ],
            prpo_pk: this.$route.params.id,
            prpu_pk: 0,
            valid: false,
            stores: [],
            providers: [],
            desserts: [],
            products: [],
            selectProv: '',
            selectStore: '',
            payments: [],
            selectpame: '',
            search: '',
            snackbar: false,
            timeout: 2000,
            subtotal: 0,
            descuento: 0,
            total: 0,
            iva: 0,
            ieps: 0,
            textMsg: "",
            editadoHeader: {
                prpu_pk: 0,
                prov_fk: 0,
                prov_name: '',
                prpo_fk: 0,
                stor_fk: 0,
                store_name: '',
                pame_fk: 0,
                pame_name: '',
                prpu_identifier: '',
                prpu_type: 0,
                prpu_status: 0,
                created_at: '',
                updated_at: '',
                prpu_type: '',
                prpu_observation: ''
            },
            editado: {
                prpd_pk: 0,
                prpd_quantity: 0,
                prpd_price: 0,
                prpd_discountrate: 0,
                prod_pk: 0,
                prod_identifier: 0,
                prod_name: '',
                prod_description: '',
                meas_name: ''
            },
            defaultItem: {
                prpd_pk: 0,
                prpd_quantity: 0,
                prpd_price: 0,
                prpd_discountrate: 0,
                prod_pk: 0,
                prod_identifier: 0,
                prod_name: '',
                prod_description: '',
                meas_name: ''
            },
            detail: {
                prpo_fk: 0,
                prod_fk: 0,
                prpd_pk: 0,
                prpd_quantity: 0,
                prpd_price: 0,
                prpd_discountrate: 0,
            },
            detailDefault: {
                prpo_fk: 0,
                prod_fk: 0,
                prpd_pk: 0,
                prpd_quantity: 0,
                prpd_price: 0,
                prpd_discountrate: 0,
            },
            orderHeader: {
                prpu_pk: 0,
                prpo_pk: 0,
                prov_fk: 0,
                stor_fk: 0,
                pame_fk: 0,
                prpu_amount: 0,
            },
            dialogcredito: false,
            dialogcontado: false,
            dialog: false,
            loading: false,
            minNumberRules: [
                value => !!value || 'Requerido.',
                value => value > 0 || 'El número debe ser mayor o igual a cero',
            ],

        };
    },
    created() {
        this.getStores();
        this.getProviders();
        this.createCompra();
        this.getPayment();
    },

    methods: {

        formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
            try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                let j = (i.length > 3) ? i.length % 3 : 0;

                return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
            } catch (e) {
                console.log(e)
            }
        },

        getStores() {
            axios.get("/storeget")
                .then(response => {
                    this.stores = response.data.data;
                })
                .catch(e => {
                    console.log(e);
                });

        },

        getProviders() {
            axios.get("/providerlist")
                .then(response => {
                    this.providers = response.data.data;
                })
                .catch(e => {
                    console.log(e);
                });

        },

        getPayment() {
            axios
                .get("/paymentmethodsget")
                .then(response => {
                    this.payments = response.data.data;
                })
                .catch(e => {
                    console.log(e);
                });

        },

        agregar(item) {
            if (this.desserts.length > 0) {
                this.detail.prpo_fk = this.prpo_pk;
            } else {
                this.detail.prpo_fk = 0;
            }
            this.detail.prod_fk = item.prod_pk;
            this.detail.prpd_quantity = 1;
            this.detail.prpd_price = 0;
            this.detail.prpd_discountrate = 0;

            axios.post('/provider/purchase/order/details', this.detail)
                .then(response => {
                    console.log(response)
                    if (response.data.status.code == 200) {

                        this.textMsg = "¡Actualizado correctamente!";
                        this.prpo_pk = response.data.data;
                        //this.normal('Notificación','¡Actualizado correctamente!' ,"success");
                        this.createCompra();
                        this.dialog = false;
                        this.getTotal();

                    } else {
                        this.normal('Notificación', response.data.message, "error");
                    }

                })
                .catch(e => {
                    this.errors.push(e)
                })

        },

        borrar(item) {

            console.log(item)
            this.editado = Object.assign({}, item)
            var r = confirm("¿Está seguro de borrar el registro?");
            if (r == true) {
                this.delete()
            }
        },

        delete: function () {
            axios.post('/provider/purchase/details/destroy', this.editado).then(response => {
                console.log(response);
                if (response.data.status.code == 200) {

                    this.textMsg = "¡Eliminado correctamente!";

                    this.normal('Notificación', this.textMsg, "success");
                    this.createCompra();
                } else {
                    this.normal('Notificación', "Ocurrio un error al eliminar el producto", "error");
                }
            });
        },

        createCompra() {
            this.loading = true
            axios.get('/provider/purchases/' + this.prpo_pk + '') 
                .then(response => {
                    setTimeout(() => (this.loading = false), 500)
                    if (response.data.data != null) {
                        this.desserts = response.data.data.ProviderPurchaseDetail;
                        this.getTotal();
                        this.prpu_pk = response.data.data.ProviderPurchase.prpu_pk;
                        this.editadoHeader = response.data.data.ProviderPurchase;
                        console.log(response.data)
                    } else {
                        this.normal('Notificación', response.data.status.message, "error");
                    }

                })
                .catch(e => {
                    //this.errors.push(e)
                    console.log(e)
                })
        },
        cancelar() {
            this.dialog = false
            this.editado = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        },
        buscar() {
            this.loading = true
            axios.get('/product/search')
                .then(response => {
                    setTimeout(() => (this.loading = false), 500)
                    this.products = response.data.data;
                    this.dialog = true
                    console.log(response.data)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },

        onQuantityChange(item) {
            //this.editado = Object.assign({}, item)
            this.detail.prpd_pk = item.prpd_pk,
                this.detail.prod_fk = item.prod_pk;
            this.detail.prpd_quantity = item.prpd_quantity;
            this.detail.prpd_price = item.prpd_price;
            this.detail.prpd_discountrate = item.prpd_discountrate;
            axios.post('/provider/purchase/details/update', this.detail)
                .then(response => {
                    console.log(response)
                    if (response.data.status.code == 200) {

                        this.textMsg = "¡Actualizado correctamente!";
                        //this.normal('Notificación','¡Actualizado correctamente!' ,"success");
                        this.getTotal();
                    } else {
                        this.normal('Notificación', response.data.status.message, "success");
                    }

                })
                .catch(e => {
                    this.errors.push(e)
                })

        },

        getTotal() {
            this.subtotal = 0;
            this.descuento = 0;
            this.iva = 0;
            this.ieps = 0;
            for (var i = 0; i < this.desserts.length; i++) {
                var importe = this.desserts[i].prpd_price * this.desserts[i].prpd_quantity;
                var importeDescuento = (importe * (1 - this.desserts[i].prpd_discountrate / 100));

                this.descuento = this.descuento + ((importe) * ((this.desserts[i].prpd_discountrate / 100)));

                this.subtotal = this.subtotal + (importeDescuento);
                if (this.desserts[i].prod_iva == 1)
                    this.iva = this.iva + ((importeDescuento / (1 + (this.desserts[i].syst_iva / 100))) * (this.desserts[i].syst_iva / 100));
                if (this.desserts[i].prod_ieps == 1)
                    this.ieps = this.ieps + ((importeDescuento / (1 + (this.desserts[i].syst_ieps / 100))) * (this.desserts[i].syst_ieps / 100));
            }

            this.total = this.subtotal;
        },

        finalizar() {

            if (this.selectProv == '' || this.selectProv == null) {
                this.normal('Notificación', "Debe seleccionar un proveedor", "error");
                return;
            }

            if (this.selectStore == '' || this.selectStore == null) {
                this.normal('Notificación', "Debe seleccionar una sucursal", "error");
                return;
            }

            if (this.selectpame == '' || this.selectpame == null) {
                this.normal('Notificación', "Debe seleccionar una forma de pago", "error");
                return;
            }

            var r = confirm("¿Está seguro de finalizar la venta?");
            if (r == true) {
                this.orderHeader.prpu_pk = this.prpu_pk
                this.orderHeader.prpo_pk = this.prpo_pk
                this.orderHeader.prov_fk = this.selectProv.prov_pk
                this.orderHeader.stor_fk = this.selectStore.stor_pk
                this.orderHeader.pame_fk = this.selectpame.pame_pk
                this.orderHeader.prpu_amount = this.total

                console.log(this.orderHeader)

                axios.post('/provider/purchases/update', this.orderHeader)
                    .then(response => {
                        console.log(response)
                        if (response.data.status.code == 200) {

                            this.textMsg = "¡Actualizado correctamente!";
                            this.normal('Notificación', '¡Actualizado correctamente!', "success");
                            this.$router.push('/purchaselist');
                        } else {
                            this.normal('Notificación', "Ocurrio un error al finalizar la compra", "error");
                        }

                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }

        },
        finalizarVenta() {
            console.log((this.total + '-' + (this.efectivo + this.tarjeta)));
            if (this.editadoSale.pame_fk == 1)
                if ((this.total - this.efectivo - this.tarjeta) == 0) {

                }
            else {
                this.normal('Notificación', "Los montos de pago deben ser igual al total", "error");
                return;
            }
            var r = confirm("¿Está seguro de finalizar la venta?");
            if (r == true) {
                this.editadoSale.clde_amount = this.total
                this.editadoSale.clpa_amount_cash = this.efectivo
                this.editadoSale.clpa_amount_transfer = this.tarjeta
                axios.post('/clientsales/update', this.editadoSale)
                    .then(response => {
                        console.log(response)
                        if (response.data.code == 200) {

                            this.textMsg = "¡Actualizado correctamente!";
                            this.normal('Notificación', '¡Actualizado correctamente!', "success");
                            this.$router.push('/sales');
                        } else {
                            this.normal('Notificación', response.data.message, "error");
                        }

                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        },

        actualizar(item) {

            this.editado = Object.assign({}, item)
            axios.post('/client_sale_details/update', this.editado)
                .then(response => {
                    this.textMsg = "¡Actualizado correctamente!";
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
        normal(Title, Description, Type) {
            this.notice = new CripNotice({
                title: Title,
                description: Description,
                className: "open-normal",
                closable: true,
                duration: 3,
                type: Type,
            })
        },

    }
}
</script>
