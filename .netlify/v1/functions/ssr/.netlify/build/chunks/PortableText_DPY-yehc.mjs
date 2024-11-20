import { s as sanityClient } from './page-ssr_BFQKSPxn.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, e as renderComponent, b as createAstro, a as addAttribute, F as Fragment } from './astro/server_Wf6vOkdf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, LIST_NEST_MODE_HTML, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
import imageUrlBuilder from '@sanity/image-url';

async function loadQuery({
  query,
  params
}) {
  const { result } = await sanityClient.fetch(
    query,
    params ?? {},
    { filterResponse: false }
  );
  return {
    data: result
  };
}

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function useContext(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$7 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = useContext(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$6 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$5 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = useContext(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$3 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$2 = createAstro();
const $$PortableText$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableText$1;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const serializeNode = (isInline) => (node, index = 0) => asComponentProps(node, index, isInline);
  const serializeChildren = (node, isInline) => node.children.map(serializeNode(isInline));
  const serializeMarksTree = (node) => buildMarksTree(node).map(serializeNode(true));
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type) => {
    const component = components[nodeType];
    return isComponent(component) ? component : component[type] ?? missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
  };
  const prepareForRender = (props) => {
    const { node } = props;
    return isPortableTextToolkitList(node) ? [
      provideComponent("list", node.listItem) ?? components.unknownList,
      serializeChildren(node, false)
    ] : isPortableTextListItemBlock(node) ? [
      provideComponent("listItem", node.listItem) ?? components.unknownListItem,
      serializeMarksTree(node).map((children) => {
        if (node.style !== "normal") {
          const { listItem, ...blockNode } = node;
          children = serializeNode(false)(blockNode, 0);
        }
        return children;
      })
    ] : isPortableTextToolkitSpan(node) ? [
      provideComponent("mark", node.markType) ?? components.unknownMark,
      serializeChildren(node, true)
    ] : isPortableTextBlock(node) ? [
      provideComponent(
        "block",
        node.style ?? (node.style = "normal")
        /* Make sure style has been set */
      ) ?? components.unknownBlock,
      serializeMarksTree(node)
    ] : isPortableTextToolkitTextNode(node) ? [
      "\n" === node.text && isComponent(components.hardBreak) ? components.hardBreak : node.text,
      []
    ] : [
      provideComponent("type", node._type) ?? components.unknownType,
      []
    ];
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node)
    };
  };
  const provideDefaultComponent = (node) => {
    return isPortableTextToolkitList(node) ? $$List : isPortableTextListItemBlock(node) ? $$ListItem : isPortableTextToolkitSpan(node) ? $$Mark : isPortableTextBlock(node) ? $$Block : isPortableTextToolkitTextNode(node) ? $$HardBreak : $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    return isPortableTextToolkitList(node) ? components.unknownList : isPortableTextListItemBlock(node) ? components.unknownListItem : isPortableTextToolkitSpan(node) ? components.unknownMark : isPortableTextBlock(node) ? components.unknownBlock : !isPortableTextToolkitTextNode(node) ? components.unknownType : (() => {
      throw new Error(
        `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
      );
    })();
  };
  const blocks = Array.isArray(value) ? value : [value];
  function* renderBlocks() {
    let index = 0;
    for (const it of nestLists(blocks, listNestingMode)) {
      yield asComponentProps(it, index++, false);
    }
  }
  return renderTemplate`${[...renderBlocks()].map(function render(props) {
    const [Cmp, children] = prepareForRender(props);
    return !isComponent(Cmp) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Cmp}` })}` : renderTemplate`${renderComponent($$result, "Cmp", Cmp, { ...props }, { "default": ($$result2) => renderTemplate`${children.map(render)}` })}`;
  })}`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const imageBuilder = imageUrlBuilder(sanityClient);
function urlForImage(source) {
  return imageBuilder.image(source);
}

const $$Astro$1 = createAstro();
const $$PortableTextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableTextImage;
  const { asset, alt } = Astro2.props.node;
  const url = urlForImage(asset).url();
  const webpUrl = urlForImage(asset).format("webp").url();
  return renderTemplate`${maybeRenderHead()}<picture> <source${addAttribute(webpUrl, "srcset")} type="image/webp"> <img class="responsive__img h-80 w-auto"${addAttribute(url, "src")}${addAttribute(alt, "alt")}> </picture>`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/components/PortableTextImage.astro", void 0);

const $$Astro = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { portableText } = Astro2.props;
  const components = {
    type: {
      image: $$PortableTextImage
    }
  };
  return renderTemplate`${renderComponent($$result, "PortableTextInternal", $$PortableText$1, { "value": portableText, "components": components })}`;
}, "/Users/alexanderdollard/Development/Astro sites/main-street-percussion-2/src/components/PortableText.astro", void 0);

export { $$PortableText as $, loadQuery as l };
