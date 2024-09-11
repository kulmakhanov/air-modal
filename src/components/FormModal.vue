<template>
  <v-dialog 
		:value="value"
    width="95vw"
    max-width="750"
    transition="scroll-x-reverse-transition"
    scrollable
    @input="(e) => $emit('input', e)"
		@keydown.esc="close()"
    @click:outside="close()"
	>
    <v-card>
      <v-card-title>{{ "Заполните заявку, чтобы стать резидентом" }}</v-card-title>
      <v-card-text>
        <v-row class="mt-2">
          <v-col cols="12" md="12">
            <v-text-field
              v-model="item.companyName"
              :label="'Наименование организации / ИП'"
              :rules="[$rules.required]"
							clearable
							dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="item.phoneNumber"
              :label="'Контактный телефон'"
              v-mask="'+#(###)-###-##-##'"
							clearable
              :rules="[$rules.required, $rules.phoneNumber]"
							dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-autocomplete
              v-model="item.roomType"
              :items="roomTypes"
              :label="'Тип помещения'"
							clearable
              :rules="[$rules.required]"
              :multiple="isMultipleType"
							dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="item.address"
              :label="'Адрес'"
              :rules="[$rules.required]"
							clearable
							dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="item.squareFrom"
              :label="'Площадь помещения от (м2)'"
              :rules="[$rules.required]"
              clearable
              dense
              :min="0"
              type="number"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="item.squareTo"
              :label="'Площадь помещения до (м2)'"
              :rules="[$rules.required]"
              clearable
              dense
              :min="0"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="item.rentDateFrom"
              :label="'Дата начала аренды с'"
              :rules="[$rules.required]"
              clearable
              dense
              type="date"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="item.rentDateTo"
              :label="'Дата начала аренды по'"
              :rules="[$rules.required]"
              clearable
              dense
              type="date"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="grey"
          rounded
          @click="clear()"
        >
					{{ "Очистить" }}
				</v-btn>
        <v-spacer/>
        <v-btn
          color="primary"
          rounded
          :disabled="!valid"
          @click="send()"
        >
					{{ "Отправить" }}
				</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "FormModal",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    daData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      item: {
        companyName: null,
        phoneNumber: null,
        roomType: null,
        address: null,
        squareFrom: null,
        squareTo: null,
        rentDateFrom: null,
        rentDateTo: null,
      },
      roomTypes: [
        "Производственная площадь",
        "Жилая площадь",
        "Коммерческая площадь",
      ],
      isMultipleType: false,
    }
  },
  computed: {
    valid() {
      return (
        !!this.item.companyName &&
          !!this.item.phoneNumber &&
            !!this.item.roomType &&
              !!this.item.address &&
                !!this.item.squareFrom &&
                  !!this.item.squareTo &&
                    !!this.item.rentDateFrom &&
                      !!this.item.rentDateTo
      )
    }
  },
  mounted() {
    if(this.daData) {
      this.item = JSON.parse(JSON.stringify(this.daData))
    }
  },
  methods: {
    close() {
      this.$emit("input", false)
    },
    clear() {
        this.item.companyName = ""
        this.item.phoneNumber = ""
        this.item.roomType = ""
        this.item.address = ""
        this.item.squareFrom = ""
        this.item.squareTo = ""
        this.item.rentDateFrom = null
        this.item.rentDateTo = null
    },
    send() {
      this.$emit("sendRequest", this.item)
      this.close()
    },
  }
}
</script>