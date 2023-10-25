import { newSpecPage } from '@stencil/core/testing';
import { FcIcon } from '../fc-icon';

describe('fc-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FcIcon],
      html: `<fc-icon name="http"></fc-icon>`,
    });
    expect(page.root).toEqualHtml(`
     <fc-icon name="http">
       <mock:shadow-root>
          <div class="svg-container"></div>
        </mock:shadow-root>
      </fc-icon>
    `);
  });
});
