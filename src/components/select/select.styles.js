import {StyleSheet} from 'react-native';
import {UNIT, COLOR_PINK, COLOR_SELECTED_DARK, COLOR_TRANSPARENT_BLACK, COLOR_FONT_ON_BLACK, COLOR_FONT_GRAY} from '../../components/variables/variables';

export default StyleSheet.create({
  modal: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: COLOR_TRANSPARENT_BLACK
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: COLOR_TRANSPARENT_BLACK,
    alignItems: 'center'
  },
  cancelButton: {
    paddingRight: UNIT * 2,
    padding: UNIT
  },
  cancelButtonText: {
    fontSize: 16,
    color: COLOR_PINK
  },
  searchInput: {
    flex: 1,
    height: UNIT * 4.5,
    borderRadius: 6,
    backgroundColor: COLOR_SELECTED_DARK,
    margin: UNIT,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: UNIT,
    color: COLOR_FONT_ON_BLACK
  },
  row: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: UNIT,
    paddingLeft: UNIT * 2,
    paddingRight: UNIT * 2
  },
  loadingRow: {
    justifyContent: 'center'
  },
  headerText: {
    color: COLOR_FONT_ON_BLACK
  },
  selectItemValue: {
    flexDirection: 'row'
  },
  itemIcon: {
    width: UNIT * 4,
    height: UNIT * 4,
    marginRight: UNIT * 2,
    borderRadius: UNIT * 2
  },
  itemTitle: {
    fontSize: 24,
    color: COLOR_FONT_ON_BLACK
  },
  loadingMessage: {
    paddingLeft: UNIT*2,
    color: COLOR_FONT_GRAY
  },
  selectedMarkIcon: {
    width: UNIT * 3,
    height: UNIT * 3,
    resizeMode: 'contain'
  },
  colorFieldItemWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colorField: {
    marginRight: UNIT * 2
  }
});
