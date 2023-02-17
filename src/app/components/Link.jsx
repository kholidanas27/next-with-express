import NextLink from "next/link";

export { Link };

function Link({ href, children, ...props }) {
  console.log('myprop', props);
  return (
    <NextLink legacyBehavior href={href}>
      <a className="text-decoration-none" {...props}>{children}</a>
    </NextLink>
  );
}
