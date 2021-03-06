// Dependencies for this module:
//   ../../react
//   ../../handsontable

import * as React from 'react';
import * as Handsontable from 'handsontable';

/**
    * Interface for the `prop` of the HotTable component - extending the default Handsontable settings with additional,
    * component-related properties.
    */
export interface HotTableProps extends Handsontable.DefaultSettings {
        data?: any[][] | object[];
        id?: string;
        className?: string;
        style?: React.CSSProperties;
        settings?: Handsontable.DefaultSettings;
}
/**
    * A Handsontable-ReactJS wrapper.
    *
    * To implement, use the `HotTable` tag with properties corresponding to Handsontable options.
    * For example:
    *
    * ```js
    * <HotTable id="hot" data={dataObject} contextMenu={true} colHeaders={true} width={600} height={300} stretchH="all" />
    *
    * // is analogous to
    * let hot = new Handsontable(document.getElementById('hot'), {
    *    data: dataObject,
    *    contextMenu: true,
    *    colHeaders: true,
    *    width: 600
    *    height: 300
    * });
    *
    * ```
    *
    * @class HotTable
    */
export class HotTable extends React.Component<HotTableProps, {}> {
        /**
            * Component props.
            *
            * @type {HotTableProps}
            */
        props: HotTableProps;
        /**
            * The `id` of the main Handsontable DOM element.
            *
            * @type {String}
            */
        id: string;
        /**
            * Reference to the Handsontable instance.
            *
            * @type {Object}
            */
        hotInstance: Handsontable;
        /**
            * Reference to the main Handsontable DOM element.
            *
            * @type {HTMLElement}
            */
        hotElementRef: HTMLElement;
        /**
            * Class name added to the component DOM element.
            *
            * @type {String}
            */
        className: string;
        /**
            * Style object passed to the component.
            *
            * @type {React.CSSProperties}
            */
        style: React.CSSProperties;
        static readonly version: string;
        /**
            * Initialize Handsontable after the component has mounted.
            */
        componentDidMount(): void;
        /**
            * Call the `updateHot` method and prevent the component from re-rendering the instance.
            *
            * @param {Object} nextProps
            * @param {Object} nextState
            * @returns {Boolean}
            */
        shouldComponentUpdate(nextProps: HotTableProps, nextState: {}): boolean;
        /**
            * Destroy the Handsontable instance when the parent component unmounts.
            */
        componentWillUnmount(): void;
        /**
            * Render the table.
            */
        render(): JSX.Element;
}

