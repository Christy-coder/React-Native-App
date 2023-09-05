import React from "react";

import { StyleSheet, View } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import AppFormPicker from "../components/AppFormPicker";

import AppTextInput from "../components/AppText/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import SubmitButton from "../components/forms/SubmitButton";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "#fc5c65", icon: 'floor-lamp' },
  { label: "Cars", value: 2, backgroundColor: "#fd9644", icon: 'car' },
  { label: "Cameras", value: 3, backgroundColor: "#fed330", icon: 'camera' },
  { label: "Games", value: 4, backgroundColor: "#26de81", icon: 'cards' },
  { label: "Clothing", value: 5, backgroundColor: "#2bcbba", icon: 'shoe-heel' },
  { label: "Sports", value: 6, backgroundColor: "#45aaf2", icon: 'basketball' },
  { label: "Movies & Music", value: 7, backgroundColor: "#4b7bec", icon: 'headphones'  },
  { label: "Books", value: 8, backgroundColor: "#B19CD9", icon: 'book-open-variant'  },
  { label: "Other", value: 9, backgroundColor: colors.medium, icon: 'application'  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              maxLength={255}
              onBlur={() => setFieldTouched("title")}
              onChange={handleChange("title")}
              placeholder="Title"
            />
            <ErrorMessage error={errors.title} visible={touched.title} />
            <View style={styles.price}>
              <AppTextInput
                maxLength={255}
                onBlur={() => setFieldTouched("price")}
                onChange={handleChange("price")}
                placeholder="Price"
                width={120}
              />
            </View>
            <ErrorMessage error={errors.price} visible={touched.price} />
            <View style={styles.picker}>
              <AppFormPicker
                items={categories}
                numberOfColumns={3}
                PickerItemComponent={CategoryPickerItem}
                name="category"
                placeholder="Category"
                width="100%"
              />
            </View>
            <AppTextInput
              maxLength={255}
              multiline
              numberOfLines={3}
              onBlur={() => setFieldTouched("description")}
              onChange={handleChange("description")}
              placeholder="Description"
            />
            <ErrorMessage
              error={errors.description}
              visible={touched.description}
            />
            <SubmitButton title="Post" />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  // price: {
  //   width: 120,
  // },
  picker: {
    width: 200,
  },
});

export default ListingEditScreen;

//Refactored Version
{
  /* <AppForm
initialValues={{
  title: "",
  price: "",
  description: "",
  category: null,
}}
onSubmit={(values) => console.log(values)}
validationSchema={validationSchema}
>
<AppFormField maxLength={255} name="title" placeholder="Title" />
<AppFormField
  keyboard="numeric"
  maxLength={8}
  name="price"
  placeholder="Price"
/>
<AppFormPicker
  items={categories}
  name="category"
  placeholder="Category"
/>
<AppFormField
  maxLength={255}
  multiline
  numberOfLines={3}
  name="description"
  placeholder="Description"
/>
<SubmitButton title="Post" />
</AppForm> */
}
