function CalendarTemplatesChartSelectionItem(props: any) {

    const style = props.isSelected ? "big-button-1 blue-bg-4 blue-bg-3-on-hover light-text" : "big-button-1 black-bg-2 blue-bg-3-on-hover light-text";

    return (
        <li onClick={() => props.select(props.pageSelector)}
            className={style}>{props.pageSelector}
        </li>
    );
}

export default CalendarTemplatesChartSelectionItem;