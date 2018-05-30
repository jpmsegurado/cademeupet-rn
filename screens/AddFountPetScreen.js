import React, { Component } from 'react';
import { 
  Container,
  Text,
  Content,
  View,
  Form,
  Item,
  Label,
  Input,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Picker,
  Textarea
} from 'native-base';
import config from '../static/config';
import { ImagePicker } from 'expo';
import { Image, ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class AddFountPetScreen extends Component {

  state = {
    image: null,
    form: {
      tipo: 1
    }
  }

  constructor() {
    super();
    this.onChangeTipo = this.onChangeTipo.bind(this);
    this.onChangeRaca = this.onChangeRaca.bind(this);
    this.onChange = this.onChange.bind(this);
    this.focusNext = this.focusNext.bind(this);
    this.submitPhoto = this.submitPhoto.bind(this);
  }

  onChangeTipo (tipo) {
    const form = this.state.form;
    form.tipo = tipo;
    this.setState({
      form: form
    });

    console.log(form);
  }

  getRacas() {
    const tipo = config.tipos.find((tipo) => tipo.value === this.state.form.tipo);
    if (!tipo) return [];
    return tipo.racas.map((raca, index) => (<Picker.Item label={raca} value={index} key={index}/>))
  }

  onChangeRaca (raca) {
    const form = this.state.form;
    form.raca = raca;
    this.setState({
      form: form
    });

    console.log(form);
  }

  onChange (name, value) {
    const form = this.state.form;
    form[name] = value;
    this.setState({
      form: form
    });
  }

  pickPhoto () {
    ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
    }).then((image) => {
      this.setState({ image: image.uri });
    }).catch(err => console.log(err));
  }

  focusNext() {
    this.refs.descInput.focus() 
  }

  submitPhoto(image) {
    const url = config.filesquash;
    let formData = new FormData();
    formData.append('photo', { uri: image });
    fetch(url, {
      method: 'POST',
      body: formData,
      header: {
        'content-type': 'multipart/form-data',
      },
    }).then((result) => {
      this.props.navigation.pop();
      console.log(result);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ android: 20 })}
        >
          <Header androidStatusBarColor='#164339' style={{ backgroundColor: '#1e5d4e' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.pop()}>
                <Icon name='arrow-back'></Icon>
              </Button>
            </Left>
            <Body>
              <Title>Pet Encontrado</Title>
            </Body>
            <Right></Right>
          </Header>
          <Content padder>
            <Form>
              {!this.state.image && 
              <Item style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <Icon
                  name='image'
                  style={{ fontSize: 120 }} 
                  onPress={() => this.pickPhoto()}
                />
                <Text style={{ marginBottom: 20 }}>Escolha uma foto</Text>
              </Item>}
              {this.state.image &&
              <Item>
                <Image
                  onPress={() => this.pickPhoto()}
                  source={{ uri: this.state.image }}
                  style={{ flex: 1, width: null, height: 200 }}/>
              </Item>}
              <Item>
                <Label>Tipo do animal</Label>
                <Picker
                  iosHeader='Selecione o tipo do animal'
                  mode='dropdown'
                  placeholder='Selecione o tipo do animal'
                  selectedValue={this.state.form.tipo}
                  onValueChange={(tipo) => this.onChangeTipo(tipo)}
                >
                  {config.tipos.sort(tipo => tipo.nome).map((tipo) => (
                    <Picker.Item label={tipo.nome} value={tipo.value} key={tipo.value}/>
                  ))}
                </Picker>
              </Item>
              {this.getRacas().length > 0 && 
              <Item>
                <Label>Raça do animal</Label>
                <Picker
                  iosHeader='Selecione a raça do animal'
                  mode='dropdown'
                  placeholder='Selecione a raça do animal'
                  selectedValue={this.state.form.raca}
                  onValueChange={(raca) => this.onChangeRaca(raca)}
                >
                  {this.getRacas()}
                </Picker>
              </Item>}
              <Item>
                <Input
                  onSubmitEditing={() => this.focusNext()}
                  placeholder='Nome do pet (Opcional)'
                  value={this.state.form.nome}
                  returnKeyType='next' 
                  onChangeText={(text) => this.onChange('nome', text)}
                  />
              </Item>
              <Item>
                <Input
                  ref='descInput'
                  placeholder='Descrição'
                  value={this.state.form.descricao}
                  returnKeyType='go'
                  onChangeText={(text) => this.onChange('descricao', text)}
                  />
              </Item>
              <Button full onPress={this.submitPhoto(this.state.image)}>
                <Text>Enviar</Text>
              </Button>
            </Form>
          </Content>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}

const styles = {
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA',
  }
}