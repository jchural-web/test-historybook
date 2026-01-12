import type { Meta, StoryObj } from '@storybook/angular';
import { CarouselComponent, CarouselItemComponent } from './carousel.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta<CarouselComponent> = {
  title: 'Example/Carousel',
  component: CarouselComponent,
  decorators: [
    moduleMetadata({
      imports: [CarouselComponent, CarouselItemComponent, CommonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    itemsPerView: {
      control: 'number',
      description: 'Number of items visible at once',
    },
    showArrows: {
      control: 'boolean',
      description: 'Show navigation arrows',
    },
    showIndicators: {
      control: 'boolean',
      description: 'Show pagination indicators',
    },
    loop: {
      control: 'boolean',
      description: 'Enable infinite loop',
    },
  },
  args: {
    itemsPerView: 2,
    showArrows: true,
    showIndicators: true,
    loop: false,
  },
};

export default meta;
type Story = StoryObj<CarouselComponent>;

/**
 * Default carousel showing instructor cards with 2 items per view
 */
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bsg-carousel 
        [itemsPerView]="itemsPerView" 
        [showArrows]="showArrows" 
        [showIndicators]="showIndicators"
        [loop]="loop">
        
        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Hans Verduguez</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Perú</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero de Sistemas con más de 15 años de experiencia en diseño y arquitectura de soluciones en países como Perú, Chile, Argentina, Bolivia, Ecuador y Uruguay.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 5px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Francisco Javier Moreno Díaz</div>
              <div style="margin-top: 13px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Colombia</div>
              <div style="margin-top: 1px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero Electrónico con más de 10 años de experiencia en integración e implementación de soluciones tecnológicas en hardware, software y nube.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">María González</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Chile</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Certified Solutions Architect. Ingeniera de Software con especialización en computación en la nube y desarrollo de aplicaciones escalables para empresas de tecnología.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Carlos Ramírez</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">México</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">DevOps Engineer con certificación AWS. Experto en automatización, CI/CD y gestión de infraestructura cloud con más de 8 años de experiencia en equipos internacionales.</div>
            </div>
          </div>
        </bsg-carousel-item>

      </bsg-carousel>
    `,
  }),
};

/**
 * Single item view - mobile layout
 */
export const SingleItemView: Story = {
  args: {
    itemsPerView: 1,
    showArrows: true,
    showIndicators: true,
    loop: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bsg-carousel 
        [itemsPerView]="itemsPerView" 
        [showArrows]="showArrows" 
        [showIndicators]="showIndicators"
        [loop]="loop">
        
        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Hans Verduguez</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Perú</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero de Sistemas con más de 15 años de experiencia en diseño y arquitectura de soluciones en países como Perú, Chile, Argentina, Bolivia, Ecuador y Uruguay.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 5px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Francisco Javier Moreno Díaz</div>
              <div style="margin-top: 13px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Colombia</div>
              <div style="margin-top: 1px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero Electrónico con más de 10 años de experiencia en integración e implementación de soluciones tecnológicas en hardware, software y nube.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">María González</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Chile</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Certified Solutions Architect. Ingeniera de Software con especialización en computación en la nube y desarrollo de aplicaciones escalables para empresas de tecnología.</div>
            </div>
          </div>
        </bsg-carousel-item>

      </bsg-carousel>
    `,
  }),
};

/**
 * Carousel with infinite loop enabled
 */
export const WithLoop: Story = {
  args: {
    itemsPerView: 2,
    showArrows: true,
    showIndicators: true,
    loop: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <bsg-carousel 
        [itemsPerView]="itemsPerView" 
        [showArrows]="showArrows" 
        [showIndicators]="showIndicators"
        [loop]="loop">
        
        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Hans Verduguez</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Perú</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero de Sistemas con más de 15 años de experiencia en diseño y arquitectura de soluciones en países como Perú, Chile, Argentina, Bolivia, Ecuador y Uruguay.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 5px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Francisco Javier Moreno Díaz</div>
              <div style="margin-top: 13px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Colombia</div>
              <div style="margin-top: 1px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero Electrónico con más de 10 años de experiencia en integración e implementación de soluciones tecnológicas en hardware, software y nube.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">María González</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Chile</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Certified Solutions Architect. Ingeniera de Software con especialización en computación en la nube y desarrollo de aplicaciones escalables para empresas de tecnología.</div>
            </div>
          </div>
        </bsg-carousel-item>

      </bsg-carousel>
    `,
  }),
};

/**
 * Carousel without navigation controls
 */
export const WithoutControls: Story = {
  args: {
    itemsPerView: 2,
    showArrows: false,
    showIndicators: false,
    loop: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bsg-carousel 
        [itemsPerView]="itemsPerView" 
        [showArrows]="showArrows" 
        [showIndicators]="showIndicators"
        [loop]="loop">
        
        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 15px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Hans Verduguez</div>
              <div style="margin-top: 3px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Perú</div>
              <div style="margin-top: 11px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero de Sistemas con más de 15 años de experiencia en diseño y arquitectura de soluciones en países como Perú, Chile, Argentina, Bolivia, Ecuador y Uruguay.</div>
            </div>
          </div>
        </bsg-carousel-item>

        <bsg-carousel-item>
          <div style="width: 100%; padding: 0 15px; box-sizing: border-box;">
            <div style="width: 100%; height: 226px; border-radius: 8px; border: 1px solid #CBD5E1; background: #FFF; display: flex; flex-direction: column; align-items: center; padding: 13px 10px; box-sizing: border-box;">
              <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40.5" cy="40.5" r="40.5" fill="#D9D9D9"/>
              </svg>
              <div style="margin-top: 5px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 16px; font-weight: 500; color: #334155; text-align: center;">Francisco Javier Moreno Díaz</div>
              <div style="margin-top: 13px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 14px; font-weight: 500; color: #334155; text-align: center;">Colombia</div>
              <div style="margin-top: 1px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; font-size: 12px; font-weight: 500; color: #334155; text-align: center; line-height: 1.4; padding: 0 10px;">AWS Official Trainer, AWS Architect Associate. Ingeniero Electrónico con más de 10 años de experiencia en integración e implementación de soluciones tecnológicas en hardware, software y nube.</div>
            </div>
          </div>
        </bsg-carousel-item>

      </bsg-carousel>
    `,
  }),
};
