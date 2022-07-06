
const MarkdownParser = ({text}) => {
    text.replace(/^[\s]{0,}\#{1}\s(.+)/g, '<h1>$1</h1>'); // #
    text.replace(/^[\s]{0,}\#{2}\s(.+)/g, '<h2>$1</h2>'); // ##
    text.replace(/^[\s]{0,}\#{3}\s(.+)/g, '<h3>$1</h3>'); // ###
    text.replace(/^[\s]{0,}\#{4}\s(.+)/g, '<h4>$1</h4>'); // ####
    text.replace(/^[\s]{0,}\#{5}\s(.+)/g, '<h5>$1</h5>'); // #####
    text.replace(/^[\s]{0,}\#{6}\s(.+)/g, '<h6>$1</h6>'); // ######

    return (
        <div></div>
    );
}

export default MarkdownParser;
